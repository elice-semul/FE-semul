import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const getOneOrderApi = async ({ orderId }) => {
  const token = sessionStorage.getItem('Authorization');
  const authInstance = axiosAuthApi(BASE_URL, token);
  try {
    const { data } = await authInstance.get(`orders/${orderId}`);
  } catch (err) {
    throw new Error(err);
  }
};
