"use client"
import CustomButton from "@/components/elements/buttons/customButton/CustomButton";
import { ProductI } from "@/models/product";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart";
import Image from "next/image";

type Props = {
  product: ProductI;
};
const DetailLayout = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
  }
  return (
    <main>
      <div className="flex flex-1 flex-col lg:flex-row md:shadow-lg p-4 max-w-5xl self-center mx-auto mt-2">
        <div className="flex items-center justify-center p-4">
          <Image
            alt="Product Image"
            width={300}
            height={300}
            src={product.image}
          />
        </div>
        <div className="flex flex-1 flex-col items-center p-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="my-4">{product.description}</p>
          <h3 className="font-bold self-start">{`Price: $${product.price}`}</h3>
          <CustomButton label="Add to cart" onClick={onAddToCart} />
        </div>
      </div>
    </main>
  );
};

export default DetailLayout;
