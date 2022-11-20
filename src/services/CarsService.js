import { axiosInstance } from "./AxiosService";

class CarsService {
  async getAll() {
    const response = await axiosInstance.get("/api/cars");
    return response.data;
  }

  async add(newCar) {
    try {
      const data  = await axiosInstance.post('api/cars', newCar);

      return data;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}

export default new CarsService();