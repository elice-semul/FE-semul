import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

import Toggle from '../atoms/toggle';
import OrderCompleteList from '../sections/orderCompleteList';
import OrderCurrentList from '../sections/orderCurrentList';

import { Container, Span } from '@/pages/common/atoms/index';

const OrderList = () => {
  const [isCurrent, setIsCurrent] = useState('세탁중');

  const { status, error } = useQuery(['completeOrder'], async () => {
    const { data } = await axios.get('/mock/orders');
    return data.result;
  });

  const handleToggleBtnClick = (toggle) => {
    setIsCurrent(toggle);
  };

  if (status === 'loading') {
    return <Container>loading</Container>;
  }

  if (error) {
    return <Container>error</Container>;
  }

  return (
    <Container margin="0 auto" width="100%" height="100%">
      <Span fontSize="32px" fontWeight="bold">
        세물님의 세탁 기록
      </Span>
      <Toggle isCurrent={isCurrent} onToggleBtnClick={handleToggleBtnClick} />
      {isCurrent === '세탁중' ? <OrderCurrentList /> : <OrderCompleteList />}
    </Container>
  );
};

export default OrderList;
