import axios from "axios";
import { useEffect, useState } from "react";

export function usePokedexData(search) {
  const [pokedex, setPokedex] = useState({});

  useEffect(() => {
    if (search) {
      axios
        .get("https://pokeapi.co/api/v2/pokedex-species/" + search)
        .then((res) => {
          setPokedex((prevState) => ({
            ...prevState,
            ["name"]: res.data.name,
            ["is_legendary"]: res.data.is_legendary,
            ["is_mythical"]: res.data.is_mythical,
            ["color"]: res.data.color.name,
            ["generation"]: res.data.generation.name,
            ["image"]: res.data.generation.name,
          }));
        });
  }, [search]);

  return pokedex;
}
