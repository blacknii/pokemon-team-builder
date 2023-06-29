import React, { useState, useEffect } from "react";
import axios from "axios";

function APITest() {
  const [data, setData] = useState(null);
  const isFilterActive = false;
  const start = 400;
  const end = 600;

  const types = ["water", "ice"];

  const typeQuery = (type) => `              {
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
          limit: 20
          offset: 1
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
      setData(response.data.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetch Data from GraphQL API</h1>
      {data && (
        <ul>
          {data.pokemon_v2_pokemon.map((pokemon) => (
            <li key={pokemon.id}>
              <p>{pokemon.name}</p>
              <p>{pokemon.id}</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
              />
              <p>{console.log(pokemon)}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default APITest;
