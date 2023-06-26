import "./App.css";
import pokemonGameGroups from "./data/PokemonGroups";
import { useState, useEffect } from "react";
import usePokedexData from "./hooks/usePokedexData";
import PokemonCart from "./components/PokemonCart";

const App: React.FC = () => {
  const [pokeList, setPokeList] = useState([]);
  const [urlList, setUrlList] = useState([]);

  const test = usePokedexData(urlList);

  console.log(test);

  const testDex = (gameGroup) => {
    setUrlList(gameGroup.pokedexes);
  };

  return (
    <div className="App">
      <div className="games">
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
      </div>
      <div className="game">
        {/* {test.map((test) => {
          return (
            <>
              <div>
                <p>{test.name}</p>
              </div>
              <div className="App">
                {test.pokedex.map((t) => {
                  // return <p>{t.name}</p>;
                  return (
                    <PokemonCart key={t.name} name={t.name} image={t.img} />
                  );
                })}
              </div>
            </>
          );
        })} */}
      </div>
    </div>
  );
};

export default App;
