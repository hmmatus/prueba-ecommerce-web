import styles from "./style.module.css";
type CustomButtonT = {
  type?: "default" | "outlined";
  onClick(): void;
  label: string;
};
const CustomButton = ({ type = "default", onClick, label }: CustomButtonT) => {
  return (
    <button className={`${styles.button} ${styles[type]}`} onClick={onclick}>
      {label}
    </button>
  );
};

export default CustomButton;
