import { Flex, Span } from '@/pages/common/atoms/index';

const Price = ({ totalPrice }) => {
  const total = totalPrice.reduce((acc, cur) => {
    const split = cur.option.split(' ');
    const price = Number(split[split.length - 1].slice(0, -1)) * Number(cur.quantity);
    return acc + price;
  }, 0);

  return (
    <Flex justifyContent="space-between" margin="3% 0">
      <Span fontSize="24px">예상금액</Span>
      <Span fontSize="24px" fontWeight={900}>
        {`${total}원`}
      </Span>
    </Flex>
  );
};

export default Price;
