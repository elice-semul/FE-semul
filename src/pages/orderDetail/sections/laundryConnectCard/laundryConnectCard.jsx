import { OrderDetailCardContainer } from '../../atoms';

import { ORDER_STATUS } from '@/utils/orderStatus';

const LaundryConnectCard = () => {
  return (
    <OrderDetailCardContainer
      date="2022년 12월 13일 화요일"
      orderStatus={ORDER_STATUS.CONNECT}
      lineOneTitle="동네 세탁소와"
      lineOneStrongText="동네 세탁소"
      lineTwoTitle="연결 중입니다."
      description={`새물은 믿고 맡길 수 있는\n세탁 전문가와 함께합니다.`}
    />
  );
};

export default LaundryConnectCard;
