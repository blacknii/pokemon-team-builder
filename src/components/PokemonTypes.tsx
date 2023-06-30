import styles from "./PokemonTypes.module.css";

const pokemonTypes = [
  {
    name: "all",
    color: "Crimson",
  },
  {
    name: "normal",
    color: "lightgray",
  },
  {
    name: "fire",
    color: "red",
  },
  {
    name: "water",
    color: "blue",
  },
  {
    name: "electric",
    color: "yellow",
  },
  {
    name: "grass",
    color: "green",
  },
  {
    name: "ice",
    color: "lightblue",
  },
  {
    name: "fighting",
    color: "brown",
  },
  {
    name: "poison",
    color: "purple",
  },
  {
    name: "ground",
    color: "brown",
  },
  {
    name: "flying",
    color: "skyblue",
  },
  {
    name: "psychic",
    color: "pink",
  },
  {
    name: "bug",
    color: "lightgreen",
  },
  {
    name: "rock",
    color: "brown",
  },
  {
    name: "ghost",
    color: "purple",
  },
  {
    name: "dragon",
    color: "darkblue",
  },
  {
    name: "dark",
    color: "black",
  },
  {
    name: "steel",
    color: "gray",
  },
  {
    name: "fairy",
    color: "pink",
  },
];

function PokemonTypes({ typeHandler }) {
  return (
    <div className={styles.container}>
      {pokemonTypes.map((type) => (
        <button
          onClick={() => {
            typeHandler(type.name);
          }}
          key={type.name}
          style={{ backgroundColor: type.color }}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}

export default PokemonTypes;
