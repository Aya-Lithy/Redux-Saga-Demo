import axios from "axios";

const axiosInstance = axios.create();

export const getUsersApi = async () => {
  return axiosInstance.get("https://jsonplaceholder.typicode.com/users");
};
