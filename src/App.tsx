import "./App.css";
import { useState } from "react";
import usePokemonData from "./hooks/usePokemonData";
import PokemonCart from "./components/PokemonCart";

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [pokemonMaxAmount, setPokemonMaxAmount] = useState(40);

  // const test = usePokedexData(urlList);

  const pokedex = usePokemonData(index, pokemonMaxAmount);

  const testDex = (gameGroup) => {
    setUrlList(gameGroup.pokedexes);
  };

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="game">
        {pokedex.map((pokemon) => {
          return (
            <PokemonCart
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.img}
            />
          );
        })}
      </div>
      <div className="game">
        <button onClick={() => setIndex(index - 1)}>previous</button>
        <button onClick={() => setIndex(index + 1)}>next</button>
      </div>
    </div>
  );
};

export default App;
