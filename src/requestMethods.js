import axios from "axios";
import { useSelector } from "react-redux";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const publicRequest = axios.create({
  baseURL: API_BASE_URL,
});

export const userRequest = (token) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const formDataUserRequest = (token) => {
  return axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      console.log(
        "Upload Progress: " +
          Math.round((progressEvent.loaded / progressEvent.total) * 100) +
          "%"
      );
    },
  });
};
