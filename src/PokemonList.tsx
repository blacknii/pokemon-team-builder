import styles from "./PokemonList.module.css";

const PokemonList = ({ pokemon }) => {
  return (
    <div className={styles[""]}>
      {pokemon.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
};

export default PokemonList;
