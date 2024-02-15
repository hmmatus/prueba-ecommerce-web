const BASE_URL = '/user';

const getAll = () => `${BASE_URL}/all`;
const register = () => `${BASE_URL}`;
const uploadPicture = () => `${BASE_URL}/picture`;

export const userRoutes = {
  getAll: () => getAll(),
  register: () => register(),
  uploadPicture: () => uploadPicture()
}