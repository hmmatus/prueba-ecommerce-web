import { ProductI } from "@/models/product";
import Image from "next/image";
import CustomButton from "../../buttons/customButton/CustomButton";
import { truncateText } from "@/utils/truncateText";

type ProductCardT = {
  item: ProductI;
  onClickCart(): void;
  onClickDetails(): void;
};
const ProductCard = ({ item, onClickCart, onClickDetails }: ProductCardT) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-lg hover:border-2 shadow-md p-2">
      <Image width={100} height={100} alt="Product image" src={item.image} />
      <div className="my-1">
        <h1 className="font-bold">{item.title}</h1>
        <p className="text-text-primary font-normal my-2">
          {truncateText(item.description, 30)}
        </p>
        <h3>{`$${item.price}`}</h3>
      </div>
      <div>
        <CustomButton onClick={onClickCart} label="Add to cart" />
        <CustomButton
          type="outlined"
          onClick={onClickDetails}
          label="Details"
        />
      </div>
    </div>
  );
};

export default ProductCard;
