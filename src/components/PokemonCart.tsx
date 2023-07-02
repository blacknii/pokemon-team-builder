import styles from "./PokemonCart.module.css";
import Modal from "./UI/Modal.jsx";
import usePokemonDetails from "../hooks/usePokemonDetails";
import { useState } from "react";

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
      {isActive && (
        <Modal>
          <div className={styles["image-box"]}>
            <img src={image} className={styles["image-modal"]} />
          </div>
          <p>
            <strong>Id: </strong>
            {pokemonDetails.id}
          </p>
          <p>
            <strong>Name: </strong>
            {pokemonDetails.name}
          </p>
          <p>
            <strong>Types: </strong>
            {pokemonDetails.types.map((type) => type + " ")}
          </p>
          <p>
            <strong>Generation: </strong>
            {pokemonDetails.generation}
          </p>
          <p>
            <strong>Color: </strong>
            {pokemonDetails.color}
          </p>
          <p>
            <strong>Height: </strong>
            {pokemonDetails.height}
          </p>
          <p>
            <strong>Weight: </strong>
            {pokemonDetails.weight}
          </p>
          <p>
            <strong>Info: </strong>
            {pokemonDetails.flavor_text}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default PokemonCart;
