import { ProductI } from "@/models/product";
import Image from "next/image";
import CustomButton from "../../buttons/customButton/CustomButton";
import { MdDelete } from "react-icons/md";
import { Colors } from "@/styles/colors";

type Props = {
  product: ProductI;
  onRemove(): void;
};
const CartProductCard = ({ product, onRemove }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-between p-4 w-full">
      <div className="flex items-center justify-center">
        <Image
          alt="Product image"
          width={100}
          height={100}
          src={product.image}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col p-2">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <h3>{`Price: $${product.price}`}</h3>
      </div>
      <div className="flex self-end lg:self-auto">
        <button onClick={onRemove} className="border rounded-lg">
          <MdDelete color={Colors.error} size={40}/>
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
