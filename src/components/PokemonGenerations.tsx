import styles from "./PokemonGenerations.module.css";

const pokemonGenerations = [
  {
    name: "all generations",
    start: 1,
    end: 898,
  },
  {
    name: "generationI",
    start: 1,
    end: 151,
  },
  {
    name: "generationII",
    start: 152,
    end: 251,
  },
  {
    name: "generationIII",
    start: 252,
    end: 386,
  },
  {
    name: "generationIV",
    start: 387,
    end: 493,
  },
  {
    name: "generationV",
    start: 494,
    end: 649,
  },
  {
    name: "generationVI",
    start: 650,
    end: 721,
  },
  {
    name: "generationVII",
    start: 722,
    end: 809,
  },
  {
    name: "generationVIII",
    start: 810,
    end: 898,
  },
];

function PokemonGenerations({ generationHandler }) {
  return (
    <div className={styles.container}>
      {pokemonGenerations.map((generation) => (
        <button
          onClick={() => {
            generationHandler(generation.start, generation.end);
          }}
          key={generation.name}
        >
          {generation.name}
        </button>
      ))}
    </div>
  );
}

export default PokemonGenerations;
