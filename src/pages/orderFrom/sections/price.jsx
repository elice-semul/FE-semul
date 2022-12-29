import { Flex, Span } from '@/pages/common/atoms/index';

const Price = ({ total }) => {
  return (
    <Flex justifyContent="space-between" margin="3rem 0 2rem">
      <Span fontSize="1.8rem">예상금액</Span>
      <Span fontSize="1.8rem" fontWeight={700}>
        {`${total}원`}
      </Span>
    </Flex>
  );
};

export default Price;
