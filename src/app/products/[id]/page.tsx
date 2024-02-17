import DetailLayout from "@/components/layouts/detail/DetailLayout";
import { productService } from "@/service/products/productService"

async function getProduct(id: string) {
  try {
    const data = await productService.getById(id);
    return data;
  } catch (error) {
    throw new Error(`${error}`)
  }
}
export default async function Page({ params }: { params: { id: string } }) {
  const data = await getProduct(params.id);

  return (
    <DetailLayout product={data} />
  )
}