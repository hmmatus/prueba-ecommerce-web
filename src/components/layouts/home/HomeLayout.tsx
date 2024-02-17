"use client";
import CustomButton from "@/components/elements/buttons/customButton/CustomButton";
import ProductCard from "@/components/elements/cards/productCard/ProductCard";
import { ProductI } from "@/models/product";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart";
import Image from "next/image";
import { useRouter } from "next/navigation";

type HomeLayoutP = {
  products: ProductI[];
};
const HomeLayout = ({ products }: HomeLayoutP) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const moveToProducts = () => {
    router.push("/products");
  };
  const moveToCart = () => {
    router.push("/cart");
  };

  const onAddToCart = (product: ProductI) => {
    dispatch(addToCart(product));
  }

  const onClickItem = (product: ProductI, type: string) => {
    if (type === "cart") {
      onAddToCart(product);
    } else if (type === "details") {
      router.push(`/products/${product.id}`);
    }
  };
  return (
    <main>
      <div className="flex flex-col lg:flex-row p-10">
        <div className="flex flex-1 items-center justify-center">
          <Image
            className="rounded-lg"
            alt="image"
            width={600}
            height={600}
            src={"/images/landpage.jpg"}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center p-4">
          <h1 className="text-7xl my-2">Checkout Our latest in products</h1>
          <p className="text-xl">A new experience in E-commerce </p>
          <div className="mt-6">
            <CustomButton
              label="Explore our products"
              onClick={moveToProducts}
            />
            <CustomButton
              type="outlined"
              label="Checkout"
              onClick={moveToCart}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-2 w-50vw">
        <div className="flex items-center justify-center w-50">
          <h1 className="text-xl">Some of our products</h1>
          <div className="flex self-end">
            <CustomButton
              type="outlined"
              label="See more"
              onClick={moveToProducts}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4 gap-2">
          {products.slice(0, 6).map((elto, index) => (
            <ProductCard
              key={index}
              item={elto}
              onClickCart={() => onClickItem(elto, "cart")}
              onClickDetails={() => onClickItem(elto, "details")}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
