import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { axiosAuthApi } from '@/utils/apiInstance';

const useDetailOrder = () => {
  const { orderId } = useParams();
  const token = sessionStorage.getItem('Authorization');
  const detailOrderQuery = useQuery(['renderingOrder'], async () => {
    const instance = axiosAuthApi(`${import.meta.env.VITE_BASE}`, token);
    const { data } = await instance.get(`/orders/${orderId}`);
    return data;
  });
  const cancelOrderMutate = useMutation(['cancelOrder'], async () => {
    const token = sessionStorage.getItem('Authorization');
    const instance = axiosAuthApi(`${import.meta.env.VITE_BASE}`, token);
    return instance.patch(`/orders/${orderId}`, { status: 'CANCEL' });
  });
  const updateOrderNoticeMutate = useMutation(['updateOrder'], async ({ notice }) => {
    const token = sessionStorage.getItem('Authorization');
    const instance = axiosAuthApi(`${import.meta.env.VITE_BASE}`, token);
    return instance.patch(`/orders/${orderId}`, notice);
  });
  return { detailOrderQuery, cancelOrderMutate, updateOrderNoticeMutate };
};

export default useDetailOrder;
