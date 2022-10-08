import styles from "./SearchInput.module.css";

const SearchInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Search city..."
      className={styles.input}
      onChange={props.getQuery}
      onKeyPress={props.search}
    />
  );
};

export default SearchInput;
