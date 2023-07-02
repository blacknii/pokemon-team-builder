import { useEffect, useState } from "react";
import styles from "./Modal.module.css";

function Modal({ pokemonDetails }) {
  const [x, setx] = useState(pokemonDetails);

  useEffect(() => {
    console.log(pokemonDetails);
    setx(pokemonDetails);
  }, [pokemonDetails]);
  return (
    <div className={styles["overlay"]}>
      <div className={styles["comtainer"]}>
        {" "}
        <div>
          {" "}
          <div className={styles["image-box"]}>
            <img src={x.img} className={styles["image-modal"]} />
          </div>
          <p>
            <strong>Id: </strong>
            {x.id}
          </p>
          <p>
            <strong>Name: </strong>
            {x.name}
          </p>
          <p>
            <strong>Types: </strong>
            {x.types.map((type) => type + " ")}
          </p>
          <p>
            <strong>Generation: </strong>
            {x.generation}
          </p>
          <p>
            <strong>Color: </strong>
            {x.color}
          </p>
          <p>
            <strong>Height: </strong>
            {x.height}
          </p>
          <p>
            <strong>Weight: </strong>
            {x.weight}
          </p>
          <p>
            <strong>Info: </strong>
            {x.flavor_text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
