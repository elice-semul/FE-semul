import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Loading } from '../common/atoms/index';
import { Typography } from '../common/sections/index';
import {
  LaundryConnectCard,
  LaundryInspectCard,
  LaundryIngCard,
  LaundryArrivalCard,
} from './sections';
import { StyledOrderDetailContainer } from './styled';

import { Header } from '@/pages/common/sections';
import { ORDER_STATUS } from '@/utils/orderStatus';

const OrderDetail = () => {
  const [renderingStatus, setRenderingStatus] = useState('loading');
  const { orderId } = useParams();
  const token = sessionStorage.getItem('Authorization');
  const {
    status,
    data: renderingOrder,
    error,
  } = useQuery(['renderingOrder'], async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BASE}/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (data.status === ORDER_STATUS.COMPLETE) {
      setRenderingStatus(ORDER_STATUS.ARRIVAL);
      return data;
    }

    setRenderingStatus(data.status);
    return data;
  });

  if (!renderingOrder) {
    return (
      <StyledOrderDetailContainer>
        <Loading />
      </StyledOrderDetailContainer>
    );
  }

  const getRenderingCard = () => {
    switch (renderingStatus) {
      case ORDER_STATUS.CONNECT:
        return (
          <LaundryConnectCard
            order={renderingOrder}
            {...{ renderingStatus }}
            {...{ setRenderingStatus }}
          />
        );
      case ORDER_STATUS.INSPECT:
        return (
          <LaundryInspectCard
            order={renderingOrder}
            {...{ renderingStatus }}
            {...{ setRenderingStatus }}
          />
        );
      case ORDER_STATUS.LAUNDRY:
        return (
          <LaundryIngCard
            order={renderingOrder}
            {...{ renderingStatus }}
            {...{ setRenderingStatus }}
          />
        );
      case ORDER_STATUS.ARRIVAL || ORDER_STATUS.COMPLETE:
        return (
          <LaundryArrivalCard
            order={renderingOrder}
            {...{ renderingStatus }}
            {...{ setRenderingStatus }}
          />
        );
      default:
        return '로딩 중 입니다.';
    }
  };

  return (
    <StyledOrderDetailContainer>
      <Header>상세 세탁 정보</Header>
      <Typography
        text={`${renderingOrder?.user?.name}님의 세탁 기록`}
        strongText={renderingOrder?.user?.name}
      />
      {getRenderingCard()}
    </StyledOrderDetailContainer>
  );
};

export default OrderDetail;
