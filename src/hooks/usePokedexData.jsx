import axios from "axios";
import { useState, useEffect } from "react";

const usePokedexData = (urlList) => {
  const [uniqueValues, setUniqueValues] = useState(new Set());
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (urlList) {
        try {
          const newPokedex = [];
          for (const game of urlList) {
            const pokedex = { name: game.name, pokemon: [] };
            const pokeList = await axios.get(game.URL);
            console.log("Loop Start");
            for (const pok of pokeList.data.pokemon_entries) {
              const pokInfo = await axios.get(pok.pokemon_species.url);
              const pokMoreInfo = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/" + pokInfo.data.id
              );
              pokedex.pokemon.push({
                name: pokMoreInfo.data.name,
                img: pokMoreInfo.data.sprites.front_default,
              });
            }
            newPokedex.push(pokedex);
          }
          console.log(newPokedex);
          setPokemonData([...newPokedex]);
        } catch (error) {
          console.error("Failed to fetch Pokemon data:", error);
        }
      }
    };

    fetchPokemonData();
  }, [urlList]);

  return pokemonData;
};

export default usePokedexData;
