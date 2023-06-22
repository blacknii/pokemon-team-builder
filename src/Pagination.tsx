import styles from "./Pagination.module.css";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className={styles[""]}>
      <button onClick={goToPrevPage}>Previous</button>
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
