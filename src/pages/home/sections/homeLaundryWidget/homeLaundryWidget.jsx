import { useQuery } from '@tanstack/react-query';

import { HomeTitle, CurrentLaundryBlock, EmptyLaundryBlock } from '../../atoms/index';
import { getCurrentOrdersApi } from '../../hooks/api';
import { StyledHomeLaundryWidgetContainer, StyledLoadingContainer } from './styled';

import { Loading } from '@/pages/common/atoms/index';
import { ORDER_STATUS } from '@/utils/orderStatus';

const HomeLaundrtWidget = ({ currentUser }) => {
  const token = sessionStorage.getItem('Authorization');
  if (token) {
    const { status, data: currentOrders, error } = useQuery(['currentOrders'], getCurrentOrdersApi);
    if (status === 'loading') {
      return (
        <StyledLoadingContainer>
          <Loading />
        </StyledLoadingContainer>
      );
    }
    const userCurrentOrders = currentOrders.filter(
      (order) => order.status !== ORDER_STATUS.COMPLETE && order.user.email === currentUser.email
    );
    const title = userCurrentOrders?.length > 0 ? '지금은 세탁 중 🧺' : '빨래 기다리는 중 👀';
    return (
      <StyledHomeLaundryWidgetContainer>
        <HomeTitle>{title}</HomeTitle>
        {userCurrentOrders?.length > 0 ? (
          userCurrentOrders.map((currentOrder) => (
            <CurrentLaundryBlock key={currentOrder.id} {...{ currentOrder }} />
          ))
        ) : (
          <EmptyLaundryBlock />
        )}
      </StyledHomeLaundryWidgetContainer>
    );
  }
  return (
    <StyledHomeLaundryWidgetContainer>
      <HomeTitle>빨래 기다리는 중 👀</HomeTitle>
      <EmptyLaundryBlock />
    </StyledHomeLaundryWidgetContainer>
  );
};

export default HomeLaundrtWidget;
