import ProductsLayout from "@/components/layouts/products/ProductsLayout";
import axios from "axios";
async function getData() {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    const categories = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/categories`);
    return {
      products: res.data,
      categories: categories.data,
    };
  } catch (error) {
    throw new Error(`${error}`)
  }
}
export default async function Products() {
  const data = await getData();
  return <ProductsLayout products={data.products} categories={data.categories}/>
}