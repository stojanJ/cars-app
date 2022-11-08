import { axiosInstance } from "./AxiosService";

class CarsService{
     async getAll() {
            const response = await axiosInstance.get("/api/cars");
            return response.data;
          }

}

export default new CarsService();