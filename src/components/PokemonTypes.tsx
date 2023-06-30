import styles from "./PokemonTypes.module.css";

const pokemonTypes = [
  {
    name: "Normal",
    color: "lightgray",
  },
  {
    name: "Fire",
    color: "red",
  },
  {
    name: "Water",
    color: "blue",
  },
  {
    name: "Electric",
    color: "yellow",
  },
  {
    name: "Grass",
    color: "green",
  },
  {
    name: "Ice",
    color: "lightblue",
  },
  {
    name: "Fighting",
    color: "brown",
  },
  {
    name: "Poison",
    color: "purple",
  },
  {
    name: "Ground",
    color: "brown",
  },
  {
    name: "Flying",
    color: "skyblue",
  },
  {
    name: "Psychic",
    color: "pink",
  },
  {
    name: "Bug",
    color: "lightgreen",
  },
  {
    name: "Rock",
    color: "brown",
  },
  {
    name: "Ghost",
    color: "purple",
  },
  {
    name: "Dragon",
    color: "darkblue",
  },
  {
    name: "Dark",
    color: "black",
  },
  {
    name: "Steel",
    color: "gray",
  },
  {
    name: "Fairy",
    color: "pink",
  },
];

function PokemonTypes() {
  return (
    <div className={styles[""]}>
      {pokemonTypes.map((type) => (
        <button key={type.name} style={{ backgroundColor: type.color }}>
          {type.name}
        </button>
      ))}
    </div>
  );
}

export default PokemonTypes;
