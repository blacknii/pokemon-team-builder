import axios from "axios";
import { useEffect, useState } from "react";

export function usePokemonData(search) {
  const [pokemon, setPokemon] = useState({});

  //I need [evolution, version]

  useEffect(() => {
    if (search) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon-species/" + search)
        .then((res) => {
          // pokemonData["name"] = res.data.name;
          const evolutionChain = res.data.evolution_chain.url;
          setPokemon((prevState) => ({
            ...prevState,
            ["name"]: res.data.name,
            ["is_legendary"]: res.data.is_legendary,
            ["is_mythical"]: res.data.is_mythical,
            ["color"]: res.data.color.name,
            ["generation"]: res.data.generation.name,
          }));
          axios.get(evolutionChain).then((res) => {
            console.log(res.data.chain.evolves_to);
            setPokemon((prevState) => ({
              ...prevState,
            }));
          });
        });

      axios.get("https://pokeapi.co/api/v2/pokemon/" + search).then((res) => {
        setPokemon((prevState) => ({
          ...prevState,
          ["types"]: res.data.types.map((t) => t.type.name),
        }));
      });
    }
  }, [search]);
  console.log(pokemon);
}
