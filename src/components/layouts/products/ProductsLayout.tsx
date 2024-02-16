"use client";
import ProductCard from "@/components/elements/cards/productCard/ProductCard";
import SearchInput from "@/components/elements/inputs/searchInput/SearchInput";
import CategoryTag from "@/components/elements/tags/categoryTag/CategoryTag";
import { Category, ProductI } from "@/models/product";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ProductsLayoutP = {
  products: ProductI[];
  categories: Category[];
};
const ProductsLayout = ({ products, categories }: ProductsLayoutP) => {
  const [tagSelected, setTagSelected] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onPressTag = (elto: string) => {
    if (tagSelected === elto) {
      setTagSelected("");
    } else {
      setTagSelected(elto);
    }
  };

  const onUpdateList = () => {
    if (searchValue === "" && tagSelected === "") {
      setFilteredProducts(products);
      return;
    }
    if (tagSelected === "") {
      const newArray = products.filter((elto) => elto.title.includes(searchValue));
      setFilteredProducts(newArray);
      return
    }
    const newArray = products.filter((elto) => elto.category === tagSelected && elto.title.includes(searchValue));
    setFilteredProducts(newArray);
  };
  const onChangeSearchValue = (value: string) => {
    setSearchValue(value);
  };

  const onAddToCart = (product: ProductI) => {
    dispatch(addToCart(product));
  };

  const onClickItem = (product: ProductI, type: string) => {
    if (type === "cart") {
      onAddToCart(product);
    } else if (type === "details") {
      router.push("details");
    }
  };

  const handleSearch = () => {
    onUpdateList();
  };


  useEffect(() => {
    onUpdateList();
  }, [tagSelected]);

  return (
    <main className="flex flex-col px-4">
      <div className="mx-4 my-2">
        <SearchInput
          value={searchValue}
          handleOnChange={onChangeSearchValue}
          onBlur={handleSearch}
        />
      </div>
      <div className="flex items-center justify-center gap-2">
        {categories.map((elto) => (
          <CategoryTag
            label={elto}
            key={elto}
            isSelected={elto === tagSelected}
            onClick={() => onPressTag(elto)}
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4 gap-2">
        {filteredProducts.map((elto, index) => (
          <ProductCard
            key={index}
            item={elto}
            onClickCart={() => onClickItem(elto, "cart")}
            onClickDetails={() => onClickItem(elto, "detail")}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductsLayout;
