import { axiosInstance } from "@/shared/api";

export const userAPI = {
  getUsers: async (params) => {
    try {
      const { data } = await axiosInstance.get("api/users/", { params, paramsSerializer: { indexes: null } });
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
} 