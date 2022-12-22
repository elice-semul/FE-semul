import { OrderDetailCardContainer, WashBlock } from '../../atoms';

const LaundryIngCard = ({ order, renderingStatus, setRenderingStatus }) => {
  return (
    <OrderDetailCardContainer
      date={order.pickUpDateTime}
      orderStatus={order.status}
      lineOneTitle={`${order.laundry.name} 세탁소`}
      lineOneStrongText={order.laundry.name}
      lineTwoTitle="세탁 중입니다."
      description={`희망 세탁 완료 일시: ${order.wishLaundryDateTime}\n예상 세탁 완료 일시: ${order.wishLaundryDateTime}`}
      {...{ order }}
      {...{ renderingStatus }}
      {...{ setRenderingStatus }}
    >
      {order.orderProduct.map((wash) => (
        <WashBlock
          key={wash.productId}
          id={wash.productId}
          name={wash.productName}
          qty={wash.qty}
        />
      ))}
    </OrderDetailCardContainer>
  );
};

export default LaundryIngCard;
