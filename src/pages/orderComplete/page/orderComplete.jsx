import styled from 'styled-components';

import CompleteCode from '../atoms/comleteCode';
import Infomation from '../section/infomation';

import { Container } from '@/pages/common/atoms/index';

const OrderComplete = () => {
  return (
    <Test>
      <Container
        radius="20px"
        height="780px"
        width="86%"
        shadow="0px 4px 8px 0px gray"
        padding="0 0 0 50px"
      >
        <CompleteCode />
        <Container padding="0 0 0 50px">
          <Infomation />
        </Container>
      </Container>
    </Test>
  );
};

const Test = styled(Container)`
  position: relative;
  padding: 50px;
`;
export default OrderComplete;
