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

const renderingPageArray = [
  ORDER_STATUS.CONNECT,
  ORDER_STATUS.INSPECT,
  ORDER_STATUS.LAUNDRY,
  ORDER_STATUS.ARRIVAL,
];

export const getOrderStatusTagProps = (orderStatus, renderingStatus) => {
  const orderStatusIdx = renderingPageArray.findIndex((status) => status === orderStatus);
  const renderingStatusIdx = renderingPageArray?.findIndex((status) => status === renderingStatus);
  if (orderStatus === ORDER_STATUS.COMPLETE) {
    const props = completedOrderTagProps[renderingStatusIdx];
    if (!props) throw new Error('[complete]renderingStatus props의 값이 잘못되었습니다.');
    return props;
  }
  if (renderingStatusIdx !== -1 && orderStatusIdx > renderingStatusIdx) {
    const props = completedOrderTagProps[renderingStatusIdx];
    if (!props) throw new Error('renderingStatus props의 값이 잘못되었습니다.');
    return props;
  }
  if (orderStatus === ORDER_STATUS.CANCEL) {
    const props = {
      orderStatus: ORDER_STATUS.CANCEL,
      prevText: '주문 취소',
      nextText: '주문 취소',
      prevCompleted: false,
      nextCompleted: false,
    };
    return props;
  }
  const props = orderStatusTagProps[orderStatusIdx];
  if (!props) throw new Error('orderStatus props의 값이 잘못되었습니다.');
  return props;
};
