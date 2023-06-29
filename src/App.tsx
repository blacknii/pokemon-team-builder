import styles from "./App.module.css";
import { useState } from "react";
import usePokemonData from "./hooks/usePokemonData";
import usePokemonDataGraphql from "./hooks/usePokemonDataGraphql";
import APItest from "./components/APITest.jsx";
import PokemonList from "./components/PokemonList";
import PokemonPagination from "./components/PokemonPagination";

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
      {/* <APItest /> */}
      <PokemonPagination nextPage={nextPage} prevPage={prevPage} />
      <PokemonList pokemon={pokedex} />
    </div>
  );
};

export default App;
