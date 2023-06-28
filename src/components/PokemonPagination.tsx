import React from "react";
import styles from "./PokemonPagination.module.css";

function PokemonPagination({ nextPage, prevPage }) {
  return (
    <div className={styles.game}>
      <button onClick={prevPage}>previous</button>
      <button onClick={nextPage}>next</button>
    </div>
  );
}

export default PokemonPagination;
