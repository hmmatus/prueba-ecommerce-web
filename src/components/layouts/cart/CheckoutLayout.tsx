"use client";
import CustomButton from "@/components/elements/buttons/customButton/CustomButton";
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
    // router.push()
  }
  return (
    <main>
      <div className="md:shadow-lg md:rounded-lg md:mx-4 mt-2 p-4">
        <h1 className="font-bold text-3xl mb-4">My Cart</h1>
        <div className="flex items-center justify-center">
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2 border border-black bg-table-background-primary">
                  Item Name
                </th>
                <th className="px-4 py-2 border border-black bg-table-background-primary">
                  Item Price
                </th>
                <th className="px-4 py-2 border border-black bg-table-background-primary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((elto) => (
                <tr key={elto.id}>
                  <td className="px-4 py-2 border border-black">
                    {elto.title}
                  </td>
                  <td className="px-4 py-2 border border-black">{`$${elto.price}`}</td>
                  <td className="px-4 py-2 border border-black">
                    <CustomButton
                      type="outlined"
                      label="Remove"
                      onClick={() => onRemoveItem(elto)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border border-black">
                <td></td>
                <td></td>
                <td className="p-4">
                  <h3 className="text-right font-bold">{`Total: $${totalAmount}`}</h3>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="mt-4">
        <CustomButton label="Proceed To Checkout" onClick={moveToCheckout}/>
        </div>
      </div>
    </main>
  );
};

export default CartLayout;
