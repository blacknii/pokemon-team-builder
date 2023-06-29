import styles from "./App.module.css";
import { useState } from "react";
import usePokemonData from "./hooks/usePokemonData";
import APItest from "./components/APITest.jsx";
import PokemonList from "./components/PokemonList";
import PokemonPagination from "./components/PokemonPagination";

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [pokemonMaxAmount, setPokemonMaxAmount] = useState(20);

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  const pokedex = usePokemonData(index, pokemonMaxAmount);

  return (
    <div className={styles.App}>
      <h1>Pokedex</h1>
      <APItest />
      <PokemonPagination nextPage={nextPage} prevPage={prevPage} />
      <PokemonList pokemon={pokedex} />
    </div>
  );
};

export default App;
