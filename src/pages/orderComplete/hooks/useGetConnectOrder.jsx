import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import * as API from '@/utils/api';
import * as Date from '@/utils/dateFormating';

const useGetConnenctOrder = () => {
  const [order, setOrder] = useState(null);
  const location = useLocation();

  const result = useQuery(['connectOrder'], API.getConnectOrder(location.state.id), {
    onSuccess: ({ data, price }) => {
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
  });
  return { order, result };
};

export default useGetConnenctOrder;
