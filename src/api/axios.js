import Axios from "axios";

const AxiosBase = Axios.create({
  baseURL: process.env.VUE_APP_API_HOST || "http://localhost:8080",
});

export default AxiosBase;
