"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Colors } from "@/styles/colors";
export type CartButtonT = {
  onClick(): void;
  amount: number;
};
const CartButton = ({ onClick, amount = 0 }: CartButtonT) => {
  const [isHovered, setIsHovered] = useState(false);

  // Event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <button
      className={`${styles["cart-container"]}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2">
        <FaShoppingCart width={100} height={100} color={isHovered ? Colors.white : Colors["text-primary"]} />
        <h1 style={{color: isHovered ? Colors.white : Colors.black}}>{`$${amount}`}</h1>
      </div>
    </button>
  );
};

export default CartButton;
