import { ProductI } from "@/models/product"
import Image from "next/image";
import CustomButton from "../../buttons/customButton/CustomButton";
import { truncateText } from "@/utils/truncateText";

type ProductCardT = {
  item: ProductI;
  onClickCart(): void;
  onClickDetails(): void;
}
const ProductCard = ({item, onClickCart, onClickDetails}: ProductCardT) => {

  return (
    <div className="flex flex-col items-center justify-between rounded-lg">
      <Image width={100} height={100} alt="Product image" src={item.image}/>
      <h1>{item.title}</h1>
      <p className="text-text-primary font-normal my-2">{truncateText(item.description, 30)}</p>
      <div>
      <CustomButton onClick={onClickCart} label="Add to cart"/>
      <CustomButton type="outlined" onClick={onClickDetails} label="Details"/>
      </div>
    </div>
  )
}

export default ProductCard;