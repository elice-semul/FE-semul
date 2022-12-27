import { useState, useEffect } from 'react';

import { Loading } from '../common/atoms/index';
import { Typography } from '../common/sections/index';
import useDetailOrder from './hooks/useDetailOrder';
import {
  LaundryConnectCard,
  LaundryInspectCard,
  LaundryIngCard,
  LaundryArrivalCard,
  LaundryCancelCard,
} from './sections';
import { StyledOrderDetailContainer } from './styled';

import { Header } from '@/pages/common/sections';
import { ORDER_STATUS } from '@/utils/orderStatus';

const OrderDetail = () => {
  const [renderingStatus, setRenderingStatus] = useState('loading');
  const { detailOrderQuery } = useDetailOrder();
  const { status, data: renderingOrder, error } = detailOrderQuery;

  useEffect(() => {
    if (renderingOrder?.status === ORDER_STATUS.COMPLETE) {
      setRenderingStatus(ORDER_STATUS.ARRIVAL);
    }
    setRenderingStatus(renderingOrder?.status);
  }, [renderingOrder]);

  if (status === 'loading') {
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
      case ORDER_STATUS.CANCEL:
        return (
          <LaundryCancelCard
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
