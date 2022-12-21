import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan';

import { Flex } from '@/pages/common/atoms/index';

const Infomation = () => {
  const location = useLocation();

  const { totalPrice, paymentDate, address, wishDate, notice } = location.state;
  return (
    <Flex flexDirection="column">
      <DivisionLine />
      <FlexedSpan
        infomationTitle="결제금액"
        infomationContent={`${totalPrice}원`}
        contentColor="blue"
        contentSize="17px"
        contentWeight="bold"
      />
      <FlexedSpan infomationTitle="결제일시" infomationContent={paymentDate} />
      <DivisionLine />
      <FlexedSpan infomationTitle="배송주소" infomationContent={address} />
      <FlexedSpan infomationTitle="희망세탁일" infomationContent={wishDate} />
      <FlexedSpan flexDirection="column" infomationTitle="유의사항" infomationContent={notice} />
    </Flex>
  );
};

const DivisionLine = styled.div`
  border-top: 1px solid #b7b7b7;
  margin: 30px 0px;
`;
export default Infomation;
