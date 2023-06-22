import styles from "./Pagination.module.css";

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className={styles[""]}>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
