import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan';
import OrderNumber from '../atoms/orderNumber';

import { Container } from '@/pages/common/atoms/index';
const OrderCard = () => {
  return (
    <Container
      margin="0 0 20px 0"
      padding="5%"
      height="150px"
      width="350px"
      radius="20px"
      shadow="0px 2px 10px 0px gray"
    >
      <OrderNumber orderNumber="848569" orderState="배송 완료" />
      <DivisionLine />
      <FlexedSpan title="세탁물" content="일반 패딩 외 5건" />
      <FlexedSpan title="세탁기간" content="2022.12.13 ~ 2022.12.14" />
      <FlexedSpan title="세탁비용" content="30,000원" />
    </Container>
  );
};

const DivisionLine = styled.div`
  border-top: 1px solid #000000;
  margin: 10px 0px;
`;

const Test = styled.div`
  height: 100vh;
  width: 100wh;
  background-color: tomato;
  padding: 10%;
`;
export default OrderCard;
