import styled from 'styled-components';

import OrderCard from './orderCard';

import { Container, Span } from '@/pages/common/atoms/index';
import * as Util from '@/utils/dateFormating';
const OrderCurrentList = ({ currentOrders }) => {
  return (
    <StyledContainer radius="20px" shadow="default" height="auto">
      <Container padding="5%">
        <Span fontSize="16px" fontWeight="bold">
          총 {currentOrders.length}건의 이용내역
        </Span>
      </Container>
      <Container margin="20px">
        {currentOrders.length === 0 ? (
          <Container>텅</Container>
        ) : (
          currentOrders.map((order) => {
            return (
              <OrderCard
                key={order.id}
                keyDate={order.id}
                orderNumber={order.orderNum}
                status={order.status}
                laundry={order.orderProducts}
                laundryDate={Util.deteFormatForOrderHistory(
                  order.pickUpDateTime,
                  order.wishLaundryDateTime
                )}
                totalPrice={order.totalPrice}
              />
            );
          })
        )}
      </Container>
    </StyledContainer>
  );
};
const StyledContainer = styled(Container)`
  min-height: 80%;
  width: 90%;
  margin: auto;
`;

export default OrderCurrentList;
