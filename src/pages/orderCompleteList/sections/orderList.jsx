import styled from 'styled-components';

import OrderCard from './orderCard';

import { Flex } from '@/pages/common/atoms/index';

const OrderList = () => {
  return (
    <Flex width="350px" height="490px" radius="20px" shadow="default" justifyContent="center">
      <StyledContainer>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </StyledContainer>
    </Flex>
  );
};
const StyledContainer = styled.div`
  height: 490px;
  overflow: scroll;
  background-color: transparent;
`;
export default OrderList;
