import { useEffect, useState } from "react";
import axios from "axios";

export function usePokemonData(index, range) {
  const [pokedex, setpokedex] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonResponse = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            index * range
          }&limit=${range}`
        );

        const pokemonArr = [];

        for (const singlePokemon of pokemonResponse.data.results) {
          const singlePokemonResponse = await axios.get(singlePokemon.url);
          pokemonArr.push({
            name: singlePokemonResponse.data.name,
            img: singlePokemonResponse.data.sprites.front_default,
          });
        }

        setpokedex(pokemonArr);
      } catch (error) {
        console.error(`ERROR: ${error}`);
      }
    };

    fetchPokemons();
  }, [index, range]);

  return pokedex;
}

export default usePokemonData;
