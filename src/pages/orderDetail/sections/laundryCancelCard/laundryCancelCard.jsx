import { OrderDetailCardContainer, ConnectStatusBtnBlock, OrderReceipt } from '../../atoms';

const LaundryCancelCard = ({ order, renderingStatus, setRenderingStatus }) => {
  return (
    <OrderDetailCardContainer
      date={order.createdAt}
      orderStatus={order.status}
      lineOneTitle="주문이 취소되었습니다."
      lineOneStrongText="주문"
      description="새물을 이용해주셔서 감사합니다."
      {...{ order }}
      {...{ renderingStatus }}
      {...{ setRenderingStatus }}
    >
      <OrderReceipt {...{ order }} />
    </OrderDetailCardContainer>
  );
};

export default LaundryCancelCard;
