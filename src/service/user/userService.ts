import { CustomFileObject, RegisterFormP } from "@/model/auth/register.model";
import { service } from "../config"
import { userRoutes } from "./userRoutes";

export const userService = {
  getAllUsers: () => {
    return service.get(userRoutes.getAll());
  },
  register: (data: RegisterFormP) => {
    return service.post(userRoutes.register(), data)
  },
  uploadPicture: (file: any) => {
    console.log("🚀 ~ file:", file)
    const formData = new FormData();
    formData.append('file', file);
    return service.post(userRoutes.uploadPicture(), formData, {
      'Content-Type': 'multipart/form-data'
    })
  }
}