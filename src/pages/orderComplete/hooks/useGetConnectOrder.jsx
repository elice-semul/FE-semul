import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as API from './api';

import * as Date from '@/utils/dateFormating';

const useGetConnenctOrder = () => {
  const [order, setOrder] = useState(null);
  const location = useLocation();
  const result = useQuery(['connectOrder'], () => API.getConnectOrder(location.state.id), {
    onSuccess: (data) => {
      const price = data.orderProducts.reduce((acc, cur) => {
        const temp = cur.price * cur.qty;
        return acc + temp;
      }, 0);

      const obj = {
        id: data.id,
        paymentDate: Date.dateFormatCommon(data.createdAt),
        pickupDate: Date.dateFormatCommon(data.pickUpDateTime),
        wishLaundryDate: Date.dateFormatCommon(data.wishLaundryDateTime),
        price,
        address: `${data.address.roadAddr} ${data.address.detailAddr}`,
        notice: data.notice,
      };
      setOrder(obj);
    },
    onError: (error) => {
      // eslint-disable-next-line no-alert
      alert(error);
    },
  });
  return { order, result };
};

export default useGetConnenctOrder;
