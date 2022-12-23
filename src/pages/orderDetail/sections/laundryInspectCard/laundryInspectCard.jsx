import { OrderDetailCardContainer, WashBlock } from '../../atoms';
import { StyledInspectSheetBtn } from './styled';

import { ORDER_STATUS } from '@/utils/orderStatus';

const renderingPageArray = [
  ORDER_STATUS.CONNECT,
  ORDER_STATUS.INSPECT,
  ORDER_STATUS.LAUNDRY,
  ORDER_STATUS.ARRIVAL,
];

const LaundryInspectCard = ({ order, renderingStatus, setRenderingStatus }) => {
  const isInspect = order.status === ORDER_STATUS.INSPECT;
  const orderStatusIdx = renderingPageArray.findIndex((status) => status === order.status);
  const renderingPageIdx = renderingPageArray.findIndex((status) => status === renderingStatus);
  return (
    <OrderDetailCardContainer
      date={order.createdAt}
      orderStatus={order.status}
      lineOneTitle={`${order.laundry.name} 세탁소에서`}
      lineOneStrongText={`${order.laundry.name} 세탁소`}
      lineTwoTitle={isInspect ? '세탁물을 확인 중입니다.' : '세탁물을 인수했습니다.'}
      description={`새물은 믿고 맡길 수 있는\n세탁 전문가와 함께합니다.`}
      {...{ order }}
      {...{ renderingStatus }}
      {...{ setRenderingStatus }}
    >
      {order.orderProducts.map((wash) => (
        <WashBlock key={wash.id} id={wash.id} name={wash.productName} qty={wash.qty} />
      ))}

      {(order.status === ORDER_STATUS.COMPLETE || orderStatusIdx > renderingPageIdx) && (
        <StyledInspectSheetBtn>인수증 확인하기</StyledInspectSheetBtn>
      )}
    </OrderDetailCardContainer>
  );
};

export default LaundryInspectCard;
