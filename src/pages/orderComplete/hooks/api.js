import { axiosAuthApi } from '@/utils/apiInstance';
const BASE_URL = import.meta.env.VITE_BASE;

export const getConnectOrder = async (orderId) => {
  try {
    const token = sessionStorage.getItem('Authorization');
    if (!token) throw new 'missing token: 권한 오류'();

    const instance = axiosAuthApi(BASE_URL, token);
    const { data } = await instance.get(`/orders/${orderId}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
