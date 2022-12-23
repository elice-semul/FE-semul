import { OrderDetailCardContainer } from '../../atoms';

import { ORDER_STATUS } from '@/utils/orderStatus';

const LaundryConnectCard = ({ order, renderingStatus, setRenderingStatus }) => {
  const isConnect = order.status === ORDER_STATUS.CONNECT;
  return (
    <OrderDetailCardContainer
      date={order.createdAt}
      orderStatus={order.status}
      lineOneTitle={isConnect ? '동네 세탁소와' : `${order.laundry.name} 세탁소와`}
      lineOneStrongText={isConnect ? '동네 세탁소' : `${order.laundry.name}`}
      lineTwoTitle={isConnect ? '연결 중입니다.' : '연결되었습니다.'}
      description={`새물은 믿고 맡길 수 있는\n세탁 전문가와 함께합니다.`}
      {...{ order }}
      {...{ renderingStatus }}
      {...{ setRenderingStatus }}
    />
  );
};

export default LaundryConnectCard;
