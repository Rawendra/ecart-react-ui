import axios from "axios";
axios.defaults.baseURL = "http://localhost:9000";
const username = "root";
const password = "root";
const options = {
  headers: {
    Authorization: `Basic ${btoa(username + ":" + password)}`,
  },
};

export const getProducts = () => {
  return axios.get("/product-service/products-codes", {
    ...options,
  });
};

export const login = (_options) => {
  return axios.get("/auth/login-with-user", {
    ..._options,
  });
};

export const signUp = (data) => {
  return axios.post("/auth/add-userDetails",data ,{
    headers: {
      "Content-Type": "application/json",
    },
  });
};
