import axios from "axios";
import { useState, useEffect } from "react";

const usePokedexData = (url) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (url) {
        try {
          const res = await axios.get(url);
          let newData = [];

          for (const pok of res.data.pokemon_entries) {
            const speciesRes = await axios.get(pok.pokemon_species.url);
            const pokemonRes = await axios.get(
              "https://pokeapi.co/api/v2/pokemon/" + speciesRes.data.id
            );
            newData.push({
              name: pokemonRes.data.name,
              img: pokemonRes.data.sprites.front_default,
            });
          }

          setPokemonData(newData);
        } catch (error) {
          console.error("Failed to fetch Pokemon data:", error);
        }
      }
    };

    fetchPokemonData();
  }, [url]);

  return pokemonData;
};

export default usePokedexData;
