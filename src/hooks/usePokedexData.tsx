import axios from "axios";
import { useState, useEffect } from "react";

const usePokedexData = (url: string[]) => {
  const [pokemonData, setPokemonData] = useState<number[]>([]);

  useEffect(() => {
    console.log(url);
    if (url) {
      let data;
      axios.get(url).then((res) => {
        setPokemonData(
          res.data.pokemon_entries.map((pok) => pok.pokemon_species.url)
        );
      });
    }
  }, [url]);

  return pokemonData;
};

export default usePokedexData;
