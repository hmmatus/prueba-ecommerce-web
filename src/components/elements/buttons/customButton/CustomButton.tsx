import styles from "./style.module.css";
type CustomButtonT = {
  type?: "default" | "outlined";
  onClick(): void;
  label: string;
  isDisabled?: boolean;
};
const CustomButton = ({
  type = "default",
  onClick,
  label,
  isDisabled = false,
}: CustomButtonT) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${
        isDisabled ? styles.disabled : ""
      }`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default CustomButton;
