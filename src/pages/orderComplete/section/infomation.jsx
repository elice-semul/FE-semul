import styled from 'styled-components';

import FlexedSpan from '../atoms/flexedSpan';

import { Flex } from '@/pages/common/atoms/index';

const Infomation = () => {
  return (
    <Flex width="85%" flexDirection="column">
      <DivisionLine />
      <FlexedSpan
        infomationTitle="결제금액"
        infomationContent="28,000 원"
        contentColor="blue"
        contentSize="17px"
        contentWeight="bold"
      />
      <FlexedSpan infomationTitle="결제일시" infomationContent="2022년 12월 17일" />
      <DivisionLine />
      <FlexedSpan infomationTitle="배송주소" infomationContent="새물시 새물동 새물집" />
      <FlexedSpan infomationTitle="희망세탁일" infomationContent="2022년 12월 20일" />
      <FlexedSpan
        flexDirection="column"
        infomationTitle="유의사항"
        infomationContent="다우니 많이 넣어주세요"
      />
    </Flex>
  );
};

const DivisionLine = styled.div`
  border-top: 1px solid #b7b7b7;
  margin: 30px 0px;
`;
export default Infomation;
