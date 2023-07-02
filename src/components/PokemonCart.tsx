import styles from "./PokemonCart.module.css";
import Modal from "./UI/Modal.jsx";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { useEffect, useState } from "react";

interface PokemonCartProps {
  pokemon: string[];
}

const PokemonCart: React.FC<PokemonCartProps> = ({ name, image }) => {
  const [isActive, setisActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const pokemonDetails = usePokemonDetails(isActive, name, image);

  const clickHandler = () => {
    setisActive(!isActive);
    setIsModalActive(!isModalActive);
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
      <img src={image} className={styles["image"]} />
      {isActive && <Modal pokemonDetails={pokemonDetails}></Modal>}
    </div>
  );
};

export default PokemonCart;
