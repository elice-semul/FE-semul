import { OrderDetailCardContainer, WashBlock } from '../../atoms';

import { ORDER_STATUS } from '@/utils/orderStatus';

const LaundryIngCard = ({ order, renderingStatus, setRenderingStatus }) => {
  const isLaundry = order.status === ORDER_STATUS.LAUNDRY;
  return (
    <OrderDetailCardContainer
      date={order.createdAt}
      orderStatus={order.status}
      lineOneTitle={`${order.laundry.name}에서`}
      lineOneStrongText={order.laundry.name}
      lineTwoTitle={isLaundry ? '세탁 중입니다.' : '세탁 완료했습니다.'}
      description={`희망 세탁 완료 일시: ${order.wishLaundryDateTime}\n예상 세탁 완료 일시: ${order.wishLaundryDateTime}`}
      {...{ order }}
      {...{ renderingStatus }}
      {...{ setRenderingStatus }}
    >
      {order.orderProducts.map((wash) => (
        <WashBlock key={wash.id} id={wash.id} name={wash.productName} qty={wash.qty} />
      ))}
    </OrderDetailCardContainer>
  );
};

export default LaundryIngCard;
