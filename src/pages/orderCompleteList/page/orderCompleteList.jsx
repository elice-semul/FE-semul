import Toggle from '../atoms/toggle';
import OrderDetail from '../sections/orderDetail';

import { Container, Span } from '@/pages/common/atoms/index';
const OrderCompleteList = () => {
  return (
    <Container padding="10% 0">
      <Span fontSize="32px" fontWeight="bold">
        세물님의 세탁 기록
      </Span>
      <Toggle />
      <OrderDetail />
    </Container>
  );
};

export default OrderCompleteList;
