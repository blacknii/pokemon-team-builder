import "./App.css";
import pokemonGameGroups from "./data/PokemonGroups";
import { useState, useEffect } from "react";
import usePokedexData from "./hooks/usePokedexData";

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  console.log(usePokedexData(url));

  const testDex = (gameGroup) => {
    // console.log(gameGroup.pokedexes[0].name);
    // console.log(gameGroup.pokedexes[0].URL);
    setName(gameGroup.pokedexes[0].name);
    setUrl(gameGroup.pokedexes[0].URL);
  };

  return (
    <div className="App">
      {pokemonGameGroups.map((gameGroup) => (
        <button
          key={gameGroup.name}
          onClick={() => {
            testDex(gameGroup);
          }}
        >
          {gameGroup.name}
        </button>
      ))}
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default App;
