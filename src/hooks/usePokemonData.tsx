import axios from "axios";
import { useEffect, useState } from "react";

export function usePokemonData(search) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (search) {
      axios
        .get("https://pokeapi.co/api/v2/pokemon-species/" + search)
        .then((res) => {
          setPokemon((prevState) => ({
            ...prevState,
            ["name"]: res.data.name,
            ["is_legendary"]: res.data.is_legendary,
            ["is_mythical"]: res.data.is_mythical,
            ["color"]: res.data.color.name,
            ["generation"]: res.data.generation.name,
            ["image"]: res.data.generation.name,
          }));
        });
      axios.get("https://pokeapi.co/api/v2/pokemon/" + search).then((res) => {
        setPokemon((prevState) => ({
          ...prevState,
          ["types"]: res.data.types.map((t) => t.type.name),
          ["image"]: res.data.sprites.front_default,
        }));
      });
    }
  }, [search]);

  return pokemon;
}
