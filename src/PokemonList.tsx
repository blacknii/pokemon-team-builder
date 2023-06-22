import styles from "./PokemonList.module.css";

interface PokemonListProps {
  pokemon: string[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className={styles[""]}>
      {pokemon.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
};

export default PokemonList;
