import { ORDER_STATUS } from '@/utils/orderStatus';

const orderStatusTagProps = [
  {
    orderStatus: ORDER_STATUS.CONNECT,
    prevText: '신청 완료',
    nextText: '연결 중',
    prevCompleted: true,
    nextCompleted: false,
  },
  {
    orderStatus: ORDER_STATUS.INSPECT,
    prevText: '연결 완료',
    nextText: '인수 중',
    prevCompleted: true,
    nextCompleted: false,
  },
  {
    orderStatus: ORDER_STATUS.LAUNDRY,
    prevText: '인수 완료',
    nextText: '세탁 중',
    prevCompleted: true,
    nextCompleted: false,
  },
  {
    orderStatus: ORDER_STATUS.ARRIVAL,
    prevText: '배달 완료',
    nextText: '리뷰 작성',
    prevCompleted: true,
    nextCompleted: false,
  },
];

const completedOrderTagProps = [
  {
    rendingStatus: ORDER_STATUS.CONNECT,
    prevText: '신청 완료',
    nextText: '연결 완료',
    prevCompleted: true,
    nextCompleted: true,
  },
  {
    rendingStatus: ORDER_STATUS.INSPECT,
    prevText: '연결 완료',
    nextText: '인수 완료',
    prevCompleted: true,
    nextCompleted: true,
  },
  {
    rendingStatus: ORDER_STATUS.LAUNDRY,
    prevText: '인수 완료',
    nextText: '세탁 완료',
    prevCompleted: true,
    nextCompleted: true,
  },
  {
    rendingStatus: ORDER_STATUS.ARRIVAL,
    prevText: '배달 완료',
    nextText: '리뷰 완료',
    prevCompleted: true,
    nextCompleted: true,
  },
];
export const getOrderStatusTagProps = (orderStatus, renderingStatus) => {
  if (orderStatus === ORDER_STATUS.COMPLETE) {
    const props = completedOrderTagProps.find((e) => e.rendingStatus === renderingStatus);
    if (!props) throw new Error('renderingStatus props의 값이 잘못되었습니다.');
    return props;
  }

  const props = orderStatusTagProps.find((e) => e.orderStatus === orderStatus);
  if (!props) throw new Error('orderStatus props의 값이 잘못되었습니다.');
  return props;
};
