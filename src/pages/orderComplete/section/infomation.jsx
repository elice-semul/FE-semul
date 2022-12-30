import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan';
import useGetConnenctOrder from '../hooks/useGetConnectOrder';

import { Flex, Loading } from '@/pages/common/atoms/index';

const Infomation = () => {
  const { order, result } = useGetConnenctOrder();

  if (result.status === 'loading') {
    return <Loading />;
  }

  if (result.error) {
    return <div>error</div>;
  }

  return (
    <Flex flexDirection="column">
      <DivisionLine />
      <FlexedSpan
        infomationTitle="결제금액"
        infomationContent={`${order?.price.toLocaleString('ko-kr')}원`}
        contentColor="blue"
        contentSize="17px"
        contentWeight="bold"
      />
      <FlexedSpan infomationTitle="결제일시" infomationContent={order?.paymentDate} />
      <DivisionLine />
      <FlexedSpan infomationTitle="배송주소" infomationContent={order?.address} />
      <FlexedSpan infomationTitle="수거일" infomationContent={order?.pickupDate} />
      <FlexedSpan infomationTitle="희망세탁일" infomationContent={order?.wishLaundryDate} />
      <FlexedSpan
        flexDirection="column"
        infomationTitle="유의사항"
        infomationContent={order?.notice}
      />
    </Flex>
  );
};

const DivisionLine = styled.div`
  border-top: 1px solid #b7b7b7;
  margin: 30px 0px;
`;
export default Infomation;
