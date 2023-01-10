import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecatapi.com"
});

export default instance;
