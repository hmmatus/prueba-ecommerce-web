const BASE_URL = '/products';

const getAll = () => `${BASE_URL}/all`;
const getById = (id: string) => `${BASE_URL}/${id}`


export const productRoutes = {
  getAll: () => getAll(),
  getById: (id: string) => getById(id)
}