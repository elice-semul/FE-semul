import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const getProductApi = async () => {
  try {
    const token = sessionStorage.getItem('Authorization');
    if (!token) throw new 'missing token: 권한 오류'();

    const instance = axiosAuthApi(BASE_URL, token);
    const { data } = await instance.get('/products');

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLaundryApi = async () => {
  try {
    const token = sessionStorage.getItem('Authorization');
    if (!token) throw new 'missing token: 권한 오류'();

    const instance = axiosAuthApi(BASE_URL, token);
    const { data } = await instance.get('/laundries');

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postOrderApi = async (postObj) => {
  try {
    const token = sessionStorage.getItem('Authorization');
    if (!token) throw new 'missing token: 권한 오류'();

    const instance = axiosAuthApi(BASE_URL, token);
    const { data } = await instance.post('/orders', postObj);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUserApi = async () => {
  try {
    const token = sessionStorage.getItem('Authorization');
    if (!token) throw new 'missing token: 권한 오류'();

    const instance = axiosAuthApi(BASE_URL, token);
    const { data } = await instance.get('/users');

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
