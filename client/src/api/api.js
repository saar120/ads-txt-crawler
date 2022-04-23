import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "/api/" : "http://localhost:8080/api/";

const adsTxtAPI = axios.create({
  baseURL,
});

const getAdsTxt = async (domain) => adsTxtAPI.get("parse", { params: { domain } });

export { getAdsTxt };
