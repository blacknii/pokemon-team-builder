import { useEffect, useState } from "react";
import axios from "axios";

export function usePokemonDetails(isActive, name, img) {
  const [pokemonDetails, setPokemonDetails] = useState({
    name: name,
    img: img,
    types: "N/A",
    abilities: "N/A",
    height: "N/A",
    id: "N/A",
    types: "N/A",
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
          const details = pokemonDetails;
          const pokemonResponse = await axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + name
          );
          details["id"] = pokemonResponse.data.id;
          details["height"] = pokemonResponse.data.height;
          details["weight"] = pokemonResponse.data.weight;
          details["abilities"] = pokemonResponse.data.abilities.map(
            (ability) => ability.ability.name
          );
          details["types"] = pokemonResponse.data.types.map(
            (type) => type.type.name
          );
          const pokemonSpeciesResponse = await axios.get(
            pokemonResponse.data.species.url
          );

          details["color"] = pokemonSpeciesResponse.data.color.name;
          details["flavor_text"] =
            pokemonSpeciesResponse.data.flavor_text_entries
              .find((entry) => entry.language.name === "en")
              .flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " ");
          details["generation"] = pokemonSpeciesResponse.data.generation.name;
          details["habitat"] = pokemonSpeciesResponse.data.habitat.name;
          // console.log(details);
          setPokemonDetails(details);
        }
      } catch (error) {
        console.error(`ERROR: ${error}`);
      }
    };
    // console.log(pokemonDetails);

    fetchPokemonDetails();
  }, [isActive, name, img, pokemonDetails]);

  return pokemonDetails;
}

export default usePokemonDetails;
