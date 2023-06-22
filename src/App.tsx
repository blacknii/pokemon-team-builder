import { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import "./App.css";

type PokemonData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string }[];
};

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<string[]>([]);
  const [currentPageUrl, setCurrentPageUrl] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState<string | null>();
  const [prevPageUrl, setPrevPageUrl] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    axios.get<PokemonData>(currentPageUrl).then((res) => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map((p) => p.name));
    });
  }, [currentPageUrl]);

  const goToNextPage = () => {
    if (nextPageUrl) {
      setCurrentPageUrl(nextPageUrl);
    }
  };

  const goToPrevPage = () => {
    if (prevPageUrl) {
      setCurrentPageUrl(prevPageUrl);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : undefined}
        goToPrevPage={prevPageUrl ? goToPrevPage : undefined}
      />
    </>
  );
};

export default App;
