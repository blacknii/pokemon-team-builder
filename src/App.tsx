import "./App.css";
import pokemonGameGroups from "./data/PokemonGroups";
import { useState, useEffect } from "react";
import usePokedexData from "./hooks/usePokedexData";
import PokemonCart from "./components/PokemonCart";

const App: React.FC = () => {
  const [pokeList, setPokeList] = useState([]);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const test = usePokedexData(url);

  const testDex = (gameGroup) => {
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
      <div className="App">
        {test.map((t) => {
          // return <p>{t.name}</p>;
          return <PokemonCart name={t.name} image={t.img} />;
        })}
      </div>
    </div>
  );
};

export default App;
