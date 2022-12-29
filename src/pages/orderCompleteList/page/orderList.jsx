import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Toggle from '../atoms/toggle';
import OrderCompleteList from '../sections/orderCompleteList';
import OrderCurrentList from '../sections/orderCurrentList';

import { Container, Loading, Span } from '@/pages/common/atoms/index';
import * as API from '@/utils/api';

const OrderList = () => {
  const [isCurrent, setIsCurrent] = useState('이용내역');
  const [complete, setComplete] = useState([]);
  const [current, setCurrent] = useState([]);

  const { status, error } = useQuery(['completeOrders'], API.getCompleteOrders, {
    onSuccess: (data) => {
      const tempComplete = data
        .filter((value) => value.status === 'COMPLETE')
        .map((value) => {
          const totalPrice = value.orderProducts.reduce((acc, cur) => {
            acc += cur.price;
            return acc;
          }, 0);
          return { ...value, totalPrice };
        });

      const tempCurrnet = data
        .filter((value) => value.status !== 'COMPLETE')
        .map((value) => {
          const totalPrice = value.orderProducts.reduce((acc, cur) => {
            acc += cur.price;
            return acc;
          }, 0);
          return { ...value, totalPrice };
        });

      setComplete(tempComplete);
      setCurrent(tempCurrnet);
    },
  });

  const handleToggleBtnClick = (toggle) => {
    setIsCurrent(toggle);
  };

  if (status === 'loading') {
    return <Loading />;
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
      {isCurrent === '이용내역' ? (
        <OrderCompleteList completeOrders={complete} />
      ) : (
        <OrderCurrentList currentOrders={current} />
      )}
    </Container>
  );
};

export default OrderList;
