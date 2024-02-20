"use client";
import CustomButton from "@/components/elements/buttons/customButton/CustomButton";
import InputText from "@/components/elements/forms/input/InputText/InputText";
import InputDate from "@/components/elements/forms/input/inputDate/InputDate";
import { ProductI } from "@/models/product";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { cleanCart, removeFromCart } from "@/redux/slices/cart";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
const initialFormState = {
  name: "",
  lastName: "",
  address: "",
  card: "",
  date: new Date(),
  cvv: "",
}
const CheckoutLayout = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [expDate, setExpDate] = useState(new Date());

  const totalAmount = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);
  const onRemoveItem = (item: ProductI) => {
    dispatch(removeFromCart(item));
  };

  const onChangeValueFormData = (value: string, key: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const onPurchase = () => {
    dispatch(cleanCart());
    setFormData(initialFormState);
    toast("Purchase done successfully", {
      onClose: () => {
        router.replace("/");
      },
    });
  };

  const isDisabled =
    cart.length > 0 &&
    !!formData.name &&
    !!formData.lastName &&
    !!formData.address &&
    !!formData.card &&
    !!formData.cvv;

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
                onChangeValue={(value) => onChangeValueFormData(value, "name")}
                title="Name"
              />
              <InputText
                name="name"
                value={formData.lastName}
                onChangeValue={(value) =>
                  onChangeValueFormData(value, "lastName")
                }
                title="Last Name"
              />
            </div>
            <InputText
              name="card"
              value={formData.card}
              onChangeValue={(value) => onChangeValueFormData(value, "card")}
              title="Payment Card"
            />
            <div className="flex flex-col lg:flex-row lg:gap-4">
              <InputDate
                name="date"
                onChange={(date, event) => {
                  if (date) {
                    setExpDate(date);
                    onChangeValueFormData(`${date}`, "date");
                  }
                }}
                title="Expiration Date"
                dateFormat="MM/YY"
                selected={expDate}
              />
              <InputText
                name="cvv"
                type="password"
                value={formData.cvv}
                onChangeValue={(value) => onChangeValueFormData(value, "cvv")}
                title="CVV"
              />
            </div>
            <InputText
              name="address"
              value={formData.address}
              onChangeValue={(value) => onChangeValueFormData(value, "address")}
              title="Address"
            />
            <CustomButton
              label="Complete Purchase"
              onClick={onPurchase}
              isDisabled={!isDisabled}
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default CheckoutLayout;
