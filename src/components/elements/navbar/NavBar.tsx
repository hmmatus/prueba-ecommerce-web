"use client";
import { menuOptions } from "@/utils/menuOptions";
import useScreenSize from "@/utils/screenSize";
import Link from "next/link";
import CartButton, { CartButtonT } from "../buttons/cartButton/CardButton";
import { useAppSelector } from "@/redux/hooks";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MdOutlineMenu, MdMenuOpen } from "react-icons/md";
import styles from "./style.module.css";

const MobileMenu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-lg focus:outline-none pr-4"
        >
          {isMobileMenuOpen ? (
            <MdMenuOpen width={30} height={30} />
          ) : (
            <MdOutlineMenu width={30} height={30} />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div
          className={`flex flex-col absolute right-0 top-8 ${styles["mobile-div"]}`}
        >
          {menuOptions.map((elto) => (
            <Link
              className="text-black hover:text-white text-xl block m-4"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
              key={elto.route}
              href={elto.route}
            >
              {elto.key.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
const LaptopMenu = ({ amount, onClick }: CartButtonT) => {
  return (
    <div>
      {menuOptions.map((elto) => (
        <Link className="mx-2 hover:text-white" key={elto.key} href={elto.route}>
          {elto.key.toUpperCase()}
        </Link>
      ))}
      <CartButton amount={amount} onClick={onClick} />
    </div>
  );
};
const NavBar = () => {
  const screenSize = useScreenSize();
  const { cart } = useAppSelector((state) => state.cart);
  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);
  const router = useRouter();

  const onClickCart = () => {
    // *For later router.push("cart");
    console.log("Pressed Cart");
  };
  return (
    <nav className="bg-primary min-h-20 px-4 flex justify-between items-center ">
      <label>Your Logo</label>
      {screenSize.width > 1240 ? (
        <LaptopMenu amount={totalAmount} onClick={onClickCart} />
      ) : (
        <MobileMenu />
      )}
    </nav>
  );
};

export default NavBar;
