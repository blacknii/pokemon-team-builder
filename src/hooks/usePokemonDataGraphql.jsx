import { useEffect, useState } from "react";
import axios from "axios";

export function usePokemonDataGraphql(index, range, start, end, types) {
  const [pokedex, setpokedex] = useState([]);

  const isFilterActive = true;

  console.log(types);

  const typeQuery = (type) => `{
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: { name: { _eq: "${type}" } }
    }
  }`;

  useEffect(() => {
    const fetchData = async () => {
      const query = `{
        pokemon_v2_pokemon(
          where: {
            ${
              isFilterActive
                ? `id: { _gte: ${start}, _lte: ${end} }`
                : `id: { _gte: 0}`
            }
            _and: [
              ${types.map((type) => typeQuery(type))}
            ]
          }
          limit: ${range}
          offset: ${index * range}
        ) {
          id
          name
          pokemon_v2_pokemontypes {
            slot
            pokemon_v2_type {
              id
              name
            }
          }
        }
      }
      `;

      const response = await axios.post(
        "https://beta.pokeapi.co/graphql/v1beta",
        { query }
      );

      setpokedex(
        response.data.data.pokemon_v2_pokemon.map((data) => {
          data[
            "img"
          ] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`;
          return data;
        })
      );
    };

    fetchData();
  }, [index, range, start, end, types]);

  return pokedex;
}

export default usePokemonDataGraphql;
