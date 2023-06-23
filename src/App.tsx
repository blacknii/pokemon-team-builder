import { useEffect, useState } from "react";
// import axios from "axios";
import PokemonList from "./components/PokemonList";
import "./App.css";
import { usePokemonData } from "./hooks/usePokemonData";

// type PokemonData = {
//   count: number;
//   next: string | null;
//   previous: string | null;
//   results: { name: string; url: string }[];
// };

// type PokemonDetails = {
//   name: string;
//   image: string;
//   types: string[];
// };

// const fetchAllPokemon = async (url: string) => {
//   const response = await axios.get<PokemonData>(url);
//   const pokemonData = response.data;

//   const promises = pokemonData.results.map((p) =>
//     axios.get(p.url).then((res) => ({
//       name: p.name,
//       image: res.data.sprites.front_default,
//       types: res.data.types.map((t: any) => t.type.name),
//     }))
//   );

//   const pokemon = await Promise.all(promises);

//   if (pokemonData.next) {
//     const nextPokemon = await fetchAllPokemon(pokemonData.next);
//     return pokemon.concat(nextPokemon);
//   } else {
//     return pokemon;
//   }
// };

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  console.log(usePokemonData(3));

  // useEffect(() => {
  //   setLoading(true);
  //   fetchAllPokemon("https://pokeapi.co/api/v2/pokemon").then((pokemon) => {
  //     setPokemon(pokemon);
  //     setLoading(false);
  //   });
  // }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;
