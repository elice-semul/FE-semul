import styled from 'styled-components';

import OrderCard from './orderCard';

import { Container, Span } from '@/pages/common/atoms/index';

const OrderCurrentList = () => {
  return (
    <StyledContainer radius="20px" shadow="default" height="auto">
      <Container padding="5%">
        <Span fontSize="16px" fontWeight="bold">
          총 00개의 이용내역
        </Span>
      </Container>
      <Container margin="20px">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
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
