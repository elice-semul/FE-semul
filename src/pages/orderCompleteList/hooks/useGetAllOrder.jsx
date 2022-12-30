import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as API from './api';

import { ORDER_STATUS } from '@/utils/orderStatus';
const useGetAllOrder = () => {
  const [complete, setComplete] = useState([]);
  const [current, setCurrent] = useState([]);

  const result = useQuery(['historyOrders'], API.getAllOrders, {
    onSuccess: (data) => {
      const tempComplete = data
        .filter(
          (value) => value.status === ORDER_STATUS.COMPLETE || value.status === ORDER_STATUS.ARRIVAL
        )
        .map((value) => {
          const totalPrice = value.orderProducts.reduce((acc, cur) => {
            acc += cur.price * cur.qty;
            return acc;
          }, 0);
          return { ...value, totalPrice };
        });

      const tempCurrnet = data
        .filter(
          (value) => value.status !== ORDER_STATUS.COMPLETE && value.status !== ORDER_STATUS.ARRIVAL
        )
        .map((value) => {
          const totalPrice = value.orderProducts.reduce((acc, cur) => {
            acc += cur.price * cur.qty;
            return acc;
          }, 0);
          return { ...value, totalPrice };
        });

      setComplete(tempComplete);
      setCurrent(tempCurrnet);
    },
  });

  return { result, complete, current };
};

export default useGetAllOrder;
