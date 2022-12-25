import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan';

import { Flex } from '@/pages/common/atoms/index';
import * as API from '@/utils/api';
const Infomation = () => {
  const location = useLocation();

  const {
    status,
    data: completeOrder,
    error,
  } = useQuery(['completeOrder'], API.getConnectOrder(location.state.id));

  if (status === 'loading') {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <Flex flexDirection="column">
      <DivisionLine />
      <FlexedSpan
        infomationTitle="결제금액"
        infomationContent={`${completeOrder.price}원`}
        contentColor="blue"
        contentSize="17px"
        contentWeight="bold"
      />
      <FlexedSpan infomationTitle="결제일시" infomationContent={completeOrder.data.createdAt} />
      <DivisionLine />
      <FlexedSpan infomationTitle="배송주소" infomationContent={completeOrder.data.address.jibun} />
      <FlexedSpan
        infomationTitle="희망세탁일"
        infomationContent={completeOrder.data.wishLaundryDateTime}
      />
      <FlexedSpan
        flexDirection="column"
        infomationTitle="유의사항"
        infomationContent={completeOrder.data.notice}
      />
    </Flex>
  );
};

const DivisionLine = styled.div`
  border-top: 1px solid #b7b7b7;
  margin: 30px 0px;
`;
export default Infomation;
