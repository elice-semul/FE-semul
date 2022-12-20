import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { HomeTitle, CurrentLaundryBlock, EmptyLaundryBlock } from '../../atoms/index';
import { StyledHomeLaundryWidgetContainer } from './styled';

import { ORDER_STATUS } from '@/utils/orderStatus';

const HomeLaundrtWidget = () => {
  const {
    status,
    data: currentOrders,
    error,
  } = useQuery(['currentOrders'], async () => {
    const { data } = await axios.get('/mock/orders');
    const currentOrderData = data.result.filter((order) => order.status !== ORDER_STATUS.COMPLETE);
    return currentOrderData;
  });
  const title = currentOrders?.length > 0 ? '지금은 세탁 중 🧺' : '빨래 기다리는 중 👀';
  return (
    <StyledHomeLaundryWidgetContainer>
      <HomeTitle>{title}</HomeTitle>
      {currentOrders?.length > 0 ? (
        currentOrders.map((currentOrder) => (
          <CurrentLaundryBlock key={currentOrder.id} {...{ currentOrder }} />
        ))
      ) : (
        <EmptyLaundryBlock />
      )}
    </StyledHomeLaundryWidgetContainer>
  );
};

export default HomeLaundrtWidget;
