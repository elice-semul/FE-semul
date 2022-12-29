import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const getCurrentUserApi = async () => {
  const token = sessionStorage.getItem('Authorization');
  const authInstance = axiosAuthApi(BASE_URL, token);
  try {
    const { data } = await authInstance.get('/users');
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCurrentOrdersApi = async () => {
  try {
    const token = sessionStorage.getItem('Authorization');
    const authInstance = axiosAuthApi(BASE_URL, token);
    const { data } = await authInstance.get('/orders');
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateUserAddressApi = async (address) => {
  try {
    const token = sessionStorage.getItem('Authorization');
    const authInstance = axiosAuthApi(BASE_URL, token);
    return await authInstance.put('/users', address);
  } catch (err) {
    throw new Error(err);
  }
};
