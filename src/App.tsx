import styles from "./App.module.css";
import { useState } from "react";
import usePokemonDataGraphql from "./hooks/usePokemonDataGraphql";
import PokemonList from "./components/PokemonList";
import PokemonPagination from "./components/PokemonPagination";
import PokemonGenerations from "./components/PokemonGenerations";
import PokemonTypes from "./components/PokemonTypes";

const pokemonGenerations = {
  generationI: {
    start: 1,
    end: 151,
  },
  generationII: {
    start: 152,
    end: 251,
  },
  generationIII: {
    start: 252,
    end: 386,
  },
  generationIV: {
    start: 387,
    end: 493,
  },
  generationV: {
    start: 494,
    end: 649,
  },
  generationVI: {
    start: 650,
    end: 721,
  },
  generationVII: {
    start: 722,
    end: 809,
  },
  generationVIII: {
    start: 810,
    end: 898,
  },
};

const pokemonTypes = {
  Normal: {
    name: "Normal",
    color: "Light Gray",
  },
  Fire: {
    name: "Fire",
    color: "Red",
  },
  Water: {
    name: "Water",
    color: "Blue",
  },
  Electric: {
    name: "Electric",
    color: "Yellow",
  },
  Grass: {
    name: "Grass",
    color: "Green",
  },
  Ice: {
    name: "Ice",
    color: "Light Blue",
  },
  Fighting: {
    name: "Fighting",
    color: "Brown",
  },
  Poison: {
    name: "Poison",
    color: "Purple",
  },
  Ground: {
    name: "Ground",
    color: "Brown",
  },
  Flying: {
    name: "Flying",
    color: "Sky Blue",
  },
  Psychic: {
    name: "Psychic",
    color: "Pink",
  },
  Bug: {
    name: "Bug",
    color: "Light Green",
  },
  Rock: {
    name: "Rock",
    color: "Brown",
  },
  Ghost: {
    name: "Ghost",
    color: "Purple",
  },
  Dragon: {
    name: "Dragon",
    color: "Dark Blue",
  },
  Dark: {
    name: "Dark",
    color: "Black",
  },
  Steel: {
    name: "Steel",
    color: "Gray",
  },
  Fairy: {
    name: "Fairy",
    color: "Pink",
  },
};

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [pokemonMaxAmount, setPokemonMaxAmount] = useState(30);

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  const pokedex = usePokemonDataGraphql(index, pokemonMaxAmount);

  return (
    <div className={styles.App}>
      <h1>Pokedex</h1>
      <PokemonGenerations />
      <PokemonTypes />
      <PokemonPagination nextPage={nextPage} prevPage={prevPage} />
      <PokemonList pokemon={pokedex} />
    </div>
  );
};

export default App;
