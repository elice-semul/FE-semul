import { useState } from 'react';

import Toggle from '../atoms/toggle';
import useGetAllOrder from '../hooks/useGetAllOrder';
import OrderCompleteList from '../sections/orderCompleteList';
import OrderCurrentList from '../sections/orderCurrentList';

import { Container, Loading, Span } from '@/pages/common/atoms/index';
const OrderList = () => {
  const [isCurrent, setIsCurrent] = useState('이용내역');

  const { result, complete, current } = useGetAllOrder();

  const handleToggleBtnClick = (toggle) => {
    setIsCurrent(toggle);
  };

  if (result.status === 'loading') {
    return <Loading />;
  }

  if (result.error) {
    return <Container>error</Container>;
  }

  return (
    <Container margin="0 auto" padding="2rem" width="100%" height="100%">
      <Span fontSize="32px" fontWeight="bold">
        세물님의 세탁 기록
      </Span>
      <Toggle isCurrent={isCurrent} onToggleBtnClick={handleToggleBtnClick} />
      {isCurrent === '이용내역' ? (
        <OrderCompleteList completeOrders={complete} />
      ) : (
        <OrderCurrentList currentOrders={current} />
      )}
    </Container>
  );
};

export default OrderList;
