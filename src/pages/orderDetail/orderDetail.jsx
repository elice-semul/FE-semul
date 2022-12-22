import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Typography } from '../common/sections/index';
import {
  LaundryConnectCard,
  LaundryInspectCard,
  LaundryIngCard,
  LaundryArrivalCard,
  OrderNavBtnBlock,
} from './sections';
import { StyledOrderDetailContainer } from './styled';

import { Header } from '@/pages/common/sections';
import { ORDER_STATUS } from '@/utils/orderStatus';

const OrderDetail = () => {
  const [renderingStatus, setRenderingStatus] = useState('loading');
  const { orderId } = useParams();
  const {
    status,
    data: renderingOrder,
    error,
  } = useQuery(['renderingOrder'], async () => {
    const { data } = await axios.get(`/mock/orders/${orderId}`);
    setRenderingStatus(data.status);
    return data;
  });
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
      case ORDER_STATUS.ARRIVAL:
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
      <OrderNavBtnBlock />
      {getRenderingCard()}
    </StyledOrderDetailContainer>
  );
};

export default OrderDetail;
