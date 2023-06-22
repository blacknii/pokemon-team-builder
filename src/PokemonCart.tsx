import styles from "./PokemonCart.module.css";

interface PokemonCartProps {
  pokemon: string[];
}

const PokemonCart: React.FC<PokemonCartProps> = ({ name, image }) => {
  return (
    <div
      className={styles["container"]}
      onClick={() => {
        console.log(name);
      }}
    >
      <p>{name}</p>
      <img src={image} />
    </div>
  );
};

export default PokemonCart;
