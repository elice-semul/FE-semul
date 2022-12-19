import {
  StyledOrderDetailCardContainer,
  StyledOrderCardDateText,
  SecondLineTypography,
  StyledOrderDetailDescription,
} from './styled';

import { OrderStatusTagBlock } from '@/pages/common/atoms';
import { Typography } from '@/pages/common/sections';
import { ORDER_STATUS } from '@/utils/orderStatus';

const orderStatusTagProps = [
  {
    orderStatus: ORDER_STATUS.CONNECT,
    prevText: '신청 완료',
    nextText: '연결 중',
  },
  {
    orderStatus: ORDER_STATUS.INSPECT,
    prevText: '연결 완료',
    nextText: '인수 중',
  },
  {
    orderStatus: ORDER_STATUS.LAUNDRY,
    prevText: '인수 완료',
    nextText: '세탁 중',
  },
  {
    orderStatus: ORDER_STATUS.ARRIVAL,
    prevText: '배달 완료',
    nextText: '리뷰작성',
  },
];

const completedOrderTagProps = [
  {
    rendingStatus: ORDER_STATUS.CONNECT,
    prevText: '신청 완료',
    nextText: '연결 완료',
  },
  {
    rendingStatus: ORDER_STATUS.INSPECT,
    prevText: '연결 완료',
    nextText: '인수 완료',
  },
  {
    rendingStatus: ORDER_STATUS.LAUNDRY,
    prevText: '인수 완료',
    nextText: '세탁 완료',
  },
  {
    rendingStatus: ORDER_STATUS.ARRIVAL,
    prevText: '배달 완료',
    nextText: '리뷰작성',
  },
];

const OrderDetailCardContainer = ({
  date,
  orderStatus,
  rendingStatus,
  lineOneTitle,
  lineOneStrongText,
  lineTwoTitle,
  description,
  children,
}) => {
  const rendingOrderStatusTag = (orderStatus, rendingStatus) => {
    if (orderStatus === ORDER_STATUS.COMPLETE) {
      const props = completedOrderTagProps.find((e) => e.rendingStatus === rendingStatus);
      if (!props) throw new Error('rendingStatus props의 값이 잘못되었습니다.');
      return (
        <OrderStatusTagBlock
          prevCompleted
          nextCompleted
          prevText={props.prevText}
          nextText={props.nextText}
        />
      );
    }

    const props = orderStatusTagProps.find((e) => e.orderStatus === orderStatus);
    if (!props) throw new Error('orderStatus props의 값이 잘못되었습니다.');
    return (
      <OrderStatusTagBlock prevCompleted prevText={props.prevText} nextText={props.nextText} />
    );
  };
  return (
    <StyledOrderDetailCardContainer>
      <StyledOrderCardDateText>{date}</StyledOrderCardDateText>
      {rendingOrderStatusTag(orderStatus, rendingStatus)}
      <Typography text={lineOneTitle} strongText={lineOneStrongText} />
      <SecondLineTypography>{lineTwoTitle}</SecondLineTypography>
      <StyledOrderDetailDescription>{description}</StyledOrderDetailDescription>
      {children}
    </StyledOrderDetailCardContainer>
  );
};

export default OrderDetailCardContainer;
