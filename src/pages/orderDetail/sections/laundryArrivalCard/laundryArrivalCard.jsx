import { OrderDetailCardContainer } from '../../atoms';

const LaundryArrivalCard = ({ order, renderingStatus, setRenderingStatus }) => {
  return (
    <OrderDetailCardContainer
      date={order.pickUpDateTime}
      orderStatus={order.status}
      lineOneTitle="고객님!"
      lineOneStrongText="고객님!"
      lineTwoTitle="새물이 도착했습니다."
      description="이번 세탁은 만족스러우셨나요?"
      {...{ order }}
      {...{ renderingStatus }}
      {...{ setRenderingStatus }}
    />
  );
};

export default LaundryArrivalCard;
