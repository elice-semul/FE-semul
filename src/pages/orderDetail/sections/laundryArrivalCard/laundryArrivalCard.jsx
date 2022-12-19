import { OrderDetailCardContainer } from '../../atoms';

import { ORDER_STATUS } from '@/utils/orderStatus';

const LaundryArrivalCard = () => {
  return (
    <OrderDetailCardContainer
      date="2022년 12월 13일 화요일"
      orderStatus={ORDER_STATUS.ARRIVAL}
      lineOneTitle="고객님!"
      lineOneStrongText="고객님!"
      lineTwoTitle="새물이 도착했습니다."
      description="이번 세탁은 만족스러우셨나요?"
    />
  );
};

export default LaundryArrivalCard;
