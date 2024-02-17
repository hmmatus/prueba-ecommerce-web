import { service } from "../config"
import { productRoutes } from "./productRoutes"


export const productService = {
  getAllProducts: () => {
    return service.get(productRoutes.getAll());
  },
  getById: (id: string) => {
    return service.get(productRoutes.getById(id));
  }
}