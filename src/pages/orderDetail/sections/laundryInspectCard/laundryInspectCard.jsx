import { OrderDetailCardContainer, WashBlock } from '../../atoms';
import { StyledInspectSheetBtn } from './styled';

import { ORDER_STATUS } from '@/utils/orderStatus';

const LaundryInspectCard = ({ orderStatus, washData }) => {
  return (
    <OrderDetailCardContainer
      date="2022년 12월 13일 화요일"
      orderStatus={ORDER_STATUS.INSPECT}
      lineOneTitle="000 세탁소에서"
      lineOneStrongText="000 세탁소"
      lineTwoTitle="세탁물을 확인 중입니다."
      description={`새물은 믿고 맡길 수 있는\n세탁 전문가와 함께합니다.`}
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
      {orderStatus === ORDER_STATUS.COMPLETE && (
        <StyledInspectSheetBtn>인수증 확인하기</StyledInspectSheetBtn>
      )}
    </OrderDetailCardContainer>
  );
};

export default LaundryInspectCard;
