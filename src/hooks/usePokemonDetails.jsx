import { useEffect, useState } from "react";
import axios from "axios";

export function usePokemonDetails(isActive, name, img) {
  const [pokemonDetails, setPokemonDetails] = useState({
    name: name,
    img: img,
    types: ["N/A"],
    abilities: "N/A",
    height: "N/A",
    id: "N/A",
    weight: "N/A",
    color: "N/A",
    flavor_text: "N/A",
    generation: "N/A",
    habitat: "N/A",
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        if (isActive) {
          const response = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + name
          );
          const pokemonResponse = response.data;

          const details = {
            ...pokemonDetails,
            id: pokemonResponse.id,
            height: pokemonResponse.height,
            weight: pokemonResponse.weight,
            abilities: pokemonResponse.abilities.map(
              (ability) => ability.ability.name
            ),
            types: pokemonResponse.types.map((type) => type.type.name),
          };

          const pokemonSpeciesResponse = await axios.get(
            pokemonResponse.species.url
          );

          details["color"] = pokemonSpeciesResponse.data.color.name;
          details["flavor_text"] =
            pokemonSpeciesResponse.data.flavor_text_entries
              .find((entry) => entry.language.name === "en")
              .flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " ");
          details["generation"] = pokemonSpeciesResponse.data.generation.name;
          details["habitat"] = pokemonSpeciesResponse.data.habitat.name;

          setPokemonDetails(details);
        }
      } catch (error) {
        console.error(`ERROR: ${error}`);
      }
    };

    fetchPokemonDetails();
  }, [isActive, name]);

  return { ...pokemonDetails };
}

export default usePokemonDetails;
