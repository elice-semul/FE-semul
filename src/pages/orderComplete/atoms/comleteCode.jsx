import { BsCheckCircleFill } from 'react-icons/bs';

import { Flex, Container, Span } from '@/pages/common/atoms/index';
const CompleteCode = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <BsCheckCircleFill size={50} color="blue" />
      <Span fontSize="36px" fontWeight="bold" margin="35px 0 0 0">
        접수 완료
      </Span>
    </Flex>
  );
};

export default CompleteCode;
