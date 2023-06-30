import styles from "./App.module.css";
import { useEffect, useState } from "react";
import usePokemonDataGraphql from "./hooks/usePokemonDataGraphql";
import PokemonList from "./components/PokemonList";
import PokemonPagination from "./components/PokemonPagination";
import PokemonGenerations from "./components/PokemonGenerations";
import PokemonTypes from "./components/PokemonTypes";

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [pokemonMaxAmount, setPokemonMaxAmount] = useState(30);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(100);

  const [types, setTypes] = useState([]);

  const generationHandler = (newStart, newEnd) => {
    setStart(newStart);
    setEnd(newEnd);
  };

  const typeHandler = (newtype) => {
    if (newtype === "all") {
      setTypes([]);
    } else if (types.includes(newtype) === false && types.length < 2) {
      setTypes([...types, newtype]);
    } else if (types.includes(newtype) === false && types.length === 2) {
      setTypes([types[1], newtype]);
    } else if (types.includes(newtype) === true) {
      setTypes(types.filter((value) => value !== newtype));
    }
  };

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  const pokedex = usePokemonDataGraphql(
    index,
    pokemonMaxAmount,
    start,
    end,
    types
  );

  return (
    <div className={styles.App}>
      <h1>Pokedex</h1>
      <PokemonGenerations generationHandler={generationHandler} />
      <PokemonTypes typeHandler={typeHandler} />
      <PokemonPagination nextPage={nextPage} prevPage={prevPage} />
      <PokemonList pokemon={pokedex} />
    </div>
  );
};

export default App;
