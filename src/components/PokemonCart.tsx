import styles from "./PokemonCart.module.css";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { useState } from "react";

interface PokemonCartProps {
  pokemon: string[];
}

const PokemonCart: React.FC<PokemonCartProps> = ({ name, image }) => {
  const [isActive, setisActive] = useState(false);
  const pokemonDetails = usePokemonDetails(isActive, name, image);

  const clickHandler = () => {
    setisActive(true);
    console.log(pokemonDetails);
  };

  return (
    <div
      className={styles["container"]}
      onClick={() => {
        clickHandler(name);
      }}
    >
      <p>{name}</p>
      <img src={image} />
    </div>
  );
};

export default PokemonCart;
