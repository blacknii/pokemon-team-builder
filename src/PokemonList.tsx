import styles from "./PokemonList.module.css";

interface PokemonListProps {
  pokemon: string[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className={styles[""]}>
      {pokemon.map((p) => (
        <div key={p.name + "div"}>
          <p key={p.name + "name"}>{p.name}</p>
          <img key={p.name + "img"} src={p.image} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
