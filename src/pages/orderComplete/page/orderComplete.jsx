import styled from 'styled-components';

import CompleteCode from '../atoms/comleteCode';
import Infomation from '../section/infomation';

import { Container } from '@/pages/common/atoms/index';

const OrderComplete = () => {
  return (
    <Container
      radius="20px"
      height="780px"
      width="86%"
      shadow="0px 4px 8px 0px gray"
      margin="5% auto"
    >
      <Container padding="30% 0 0 0">
        <CompleteCode />
      </Container>
      <Container padding="0 5%">
        <Infomation />
      </Container>
    </Container>
  );
};

const Test = styled(Container)`
  position: relative;
  padding: 20px;
`;
export default OrderComplete;
