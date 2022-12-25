import { Flex, Span } from '@/pages/common/atoms/index';

const Price = ({ laundryTable }) => {
  const total = laundryTable.reduce((acc, cur) => {
    const price = Number(cur.price) * Number(cur.qty);
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
