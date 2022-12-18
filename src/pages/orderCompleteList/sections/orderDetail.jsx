import OrderList from './orderList';

import { Container, Span } from '@/pages/common/atoms/index';
const OrderDetail = () => {
  return (
    <Container height="636px" width="410px" padding="0 30px" radius="20px" shadow="default">
      <Container padding="30px">
        <Span fontSize="16px" fontWeight="bold">
          총 00개의 이용내역
        </Span>
      </Container>
      <OrderList />
    </Container>
  );
};

export default OrderDetail;
