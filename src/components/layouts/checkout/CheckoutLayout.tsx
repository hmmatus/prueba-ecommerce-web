"use client";
import CustomButton from "@/components/elements/buttons/customButton/CustomButton";
import InputText from "@/components/elements/forms/input/InputText/InputText";
import { ProductI } from "@/models/product";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cleanCart, removeFromCart } from "@/redux/slices/cart";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";

const CheckoutLayout = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    address: "",
    card: "",
    date: "",
    cvv: "",
  });

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);
  const onRemoveItem = (item: ProductI) => {
    dispatch(removeFromCart(item));
  };

  const onChangeFormData = (value: string, key: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onPurchase = () => {
    toast("Purchase done successfully");
    dispatch(cleanCart());
    router.replace("/");
  };

  return (
    <main>
      <div className="md:shadow-lg md:rounded-lg md:mx-4 mt-2 p-4">
        <h1 className="text-4xl font-bold mb-2">Checkout</h1>
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
        <div className="mt-2">
          <form>
            <h1 className="text-2xl font-bold mb-2">Personal information</h1>
            <div className="flex flex-col lg:flex-row lg:gap-4">
              <InputText
                name="name"
                value={formData.name}
                onChange={(value) => onChangeFormData(value, "name")}
                title="Name"
              />
              <InputText
                name="name"
                value={formData.lastName}
                onChange={(value) => onChangeFormData(value, "lastName")}
                title="Last Name"
              />
            </div>
            <InputText
              name="card"
              value={formData.card}
              onChange={(value) => onChangeFormData(value, "card")}
              title="Payment Card"
            />
            <div className="flex flex-col lg:flex-row lg:gap-4">
              <InputText
                name="date"
                value={formData.date}
                onChange={(value) => onChangeFormData(value, "date")}
                title="Expiration Date"
              />
              <InputText
                name="cvv"
                value={formData.cvv}
                onChange={(value) => onChangeFormData(value, "cvv")}
                title="CVV"
              />
            </div>
            <InputText
              name="address"
              value={formData.address}
              onChange={(value) => onChangeFormData(value, "address")}
              title="Address"
            />
            <CustomButton label="Complete Purchase" onClick={onPurchase} />
          </form>
        </div>
      </div>
    </main>
  );
};

export default CheckoutLayout;
