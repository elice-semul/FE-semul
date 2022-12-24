import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE;
const token = sessionStorage.getItem('Authorization');

const axiosApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  return instance;
};

const axiosAuthApi = (url, token, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL, token);
