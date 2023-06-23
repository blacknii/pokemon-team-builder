import styles from "./Pagination.module.css";

interface PaginationProps {
  goToNextPage?: () => void;
  goToPrevPage?: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  goToNextPage,
  goToPrevPage,
}) => {
  return (
    <div className={styles[""]}>
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
