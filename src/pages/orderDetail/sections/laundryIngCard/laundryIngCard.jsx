import { OrderDetailCardContainer, WashBlock } from '../../atoms';

import { ORDER_STATUS } from '@/utils/orderStatus';

const LaundryIngCard = ({ washData, estimatedTime }) => {
  return (
    <OrderDetailCardContainer
      date="2022년 12월 13일 화요일"
      orderStatus={ORDER_STATUS.LAUNDRY}
      lineOneTitle="000 세탁소에서"
      lineOneStrongText="000 세탁소"
      lineTwoTitle="세탁 중입니다."
      description={`예상 세탁 완료 일시\n${estimatedTime}`}
    >
      {washData.map((wash) => (
        <WashBlock
          key={wash.id}
          url={wash.url}
          id={wash.ud}
          name={wash.name}
          isCompleted={wash.isCompleted}
        />
      ))}
    </OrderDetailCardContainer>
  );
};

export default LaundryIngCard;
