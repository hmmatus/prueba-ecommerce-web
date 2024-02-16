import styles from "./style.module.css";
type CategoryTagT = {
  onClick(): void;
  isSelected: boolean;
  label: string;
};
const CategoryTag = ({ onClick, isSelected, label }: CategoryTagT) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.tag} ${
        isSelected ? styles.selected : styles.normal
      }`}
    >
      {label}
    </button>
  );
};

export default CategoryTag;
