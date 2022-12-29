import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan';
import OrderNumber from '../atoms/orderNumber';

import { Container } from '@/pages/common/atoms/index';
const OrderCard = ({ keyDate, orderNumber, status, laundry, laundryDate, totalPrice }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/order/${keyDate}`);
  };

  return (
    <Container
      margin="0 0 20px 0"
      padding="5%"
      height="150px"
      width="100%"
      radius="20px"
      shadow="0px 2px 10px 0px gray"
      onClick={handleDetailClick}
    >
      <OrderNumber orderNumber={orderNumber} orderState={status} />
      <DivisionLine />
      <FlexedSpan
        title="세탁물"
        content={
          laundry.length === 1
            ? laundry[0].productName
            : `${laundry[0].productName} 외 ${laundry.length - 1}`
        }
      />
      <FlexedSpan title="세탁기간" content={laundryDate} />
      <FlexedSpan title="세탁비용" content={totalPrice} />
    </Container>
  );
};

const DivisionLine = styled.div`
  border-top: 1px solid #000000;
  margin: 10px 0px;
`;

export default OrderCard;
