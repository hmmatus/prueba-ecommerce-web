"use client";
import CustomButton from "@/components/elements/buttons/customButton/CustomButton";
import CartProductCard from "@/components/elements/cards/cartProductCard/CartProductCard";
import { ProductI } from "@/models/product";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slices/cart";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

const CartLayout = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);
  const onRemoveItem = (item: ProductI) => {
    dispatch(removeFromCart(item));
  };
  const moveToCheckout = () => {
    router.push("/checkout");
  };
  return (
    <main>
      <div className="m-4 lg:mx-auto lg:shadow-xl lg:bg-table-background-primary p-4 max-w-screen-lg">
        <h1 className="font-bold text-3xl mb-4">My Cart</h1>
        <div className="flex flex-col gap-4 items-center justify-center">
          {cart.map((elto) => <CartProductCard product={elto} key={elto.id} onRemove={() => onRemoveItem(elto)}/>)}
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-xl">{`Total: $${totalAmount}`}</h2>
        </div>
        <div className={`${totalAmount === 0 ? "hidden" : ""}`}>
          <CustomButton label="Proceed To Checkout" onClick={moveToCheckout} />
        </div>
      </div>
    </main>
  );
};

export default CartLayout;
