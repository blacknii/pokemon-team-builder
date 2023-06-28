import PokemonCart from "./PokemonCart";
import styles from "./PokemonList.module.css";

interface PokemonListProps {
  pokemon: string[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className={styles["container"]}>
      {pokemon.map((p) => (
        <PokemonCart key={p.name} image={p.img} name={p.name} />
      ))}
    </div>
  );
};

export default PokemonList;
