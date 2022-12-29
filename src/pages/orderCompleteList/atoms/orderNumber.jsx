import { Flex, Span } from '@/pages/common/atoms/index';

const OrderNumber = ({ orderNumber, orderState }) => {
  return (
    <Flex justifyContent="space-between">
      <Span color="black" fontSize="14px">
        주문번호: {orderNumber}
      </Span>
      <Span color="black" fontSize="14px" fontWeight="bold">
        {orderState}
      </Span>
    </Flex>
  );
};

export default OrderNumber;
