import axios from "axios";
import { useState, useEffect } from "react";

const usePokedexData = (urlList) => {
  const [uniqueValues, setUniqueValues] = useState(new Set());
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      if (urlList) {
        try {
          const newPokedexList = [];
          for (const pokedex of urlList) {
            const newPokedex = { name: pokedex.name, pokedex: [] };
            // console.log(pokedex);
            axios.get(pokedex.URL).then((res) => {
              const newPokedexArr = [];
              for (const pokemonEntry of res.data.pokemon_entries) {
                axios.get(pokemonEntry.pokemon_species.url).then((res) => {
                  axios
                    .get("https://pokeapi.co/api/v2/pokemon/" + res.data.id)
                    .then((res) => {
                      // console.log(res.data.sprites.front_default);
                      newPokedex.pokedex.push({
                        name: res.data.name,
                        img: res.data.sprites.front_default,
                      });
                      // console.log(newPokedex);
                      setPokemonData((prevPoks) => {
                        if (!uniqueValues.has(newPokedex.name)) {
                          return [...prevPoks, newPokedex];
                        } else {
                          return [...prevPoks];
                        }
                      });
                    });
                });
              }

              // console.log(res.data.pokemon_entries);
              // newPokedex["pokedex"] = res.data.pokemon_entries;
              // newPokedexList.push(newPokedex);
              // console.log(newPokedexList);
            });
          }
          // console.log("Test");
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
