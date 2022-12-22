import { useState, useEffect } from 'react';

import {
  StyledOrderDetailCardContainer,
  StyledOrderCardDateText,
  SecondLineTypography,
  StyledOrderDetailDescription,
  StyledLeftIcon,
  StyledRightIcon,
  StyledIconBtnWrap,
} from './styled';

import { OrderStatusTagBlock } from '@/pages/common/atoms';
import { Typography } from '@/pages/common/sections';
import { ORDER_STATUS } from '@/utils/orderStatus';

const renderingPageArray = [
  ORDER_STATUS.CONNECT,
  ORDER_STATUS.INSPECT,
  ORDER_STATUS.LAUNDRY,
  ORDER_STATUS.ARRIVAL,
];

const OrderDetailCardContainer = ({
  order,
  renderingStatus,
  setRenderingStatus,
  date,
  lineOneTitle,
  lineOneStrongText,
  lineTwoTitle,
  description,
  children,
}) => {
  const [isLeftBtn, setIsLeftBtn] = useState(false);
  const [isRightBtn, setIsRightBtn] = useState(false);
  const orderStatusIdx = renderingPageArray.findIndex((status) => status === order.status);
  const renderingPageIdx = renderingPageArray.findIndex((status) => status === renderingStatus);

  useEffect(() => {
    if (renderingStatus === ORDER_STATUS.CONNECT) {
      if (order.status === ORDER_STATUS.COMPLETE || orderStatusIdx > renderingPageIdx) {
        setIsRightBtn(true);
        setIsLeftBtn(false);
        return;
      }
      setIsRightBtn(false);
      setIsLeftBtn(false);
      return;
    }
    if (renderingStatus === ORDER_STATUS.ARRIVAL) {
      setIsRightBtn(false);
      setIsLeftBtn(true);
      return;
    }
    if (order.status !== ORDER_STATUS.COMPLETE && order.status === renderingStatus) {
      setIsRightBtn(false);
      setIsLeftBtn(true);
      return;
    }
    setIsRightBtn(true);
    setIsLeftBtn(true);
  }, [renderingStatus]);
  const handleLeftBtnClick = () => {
    if (renderingPageIdx - 1 < 0) throw new Error('비정상적인 접근입니다.');
    setRenderingStatus(renderingPageArray[renderingPageIdx - 1]);
  };
  const handleRightBtnClick = () => {
    if (renderingPageIdx + 1 > renderingPageArray.length) throw new Error('비정상적인 접근입니다.');
    setRenderingStatus(renderingPageArray[renderingPageIdx + 1]);
  };
  return (
    <StyledOrderDetailCardContainer>
      <StyledOrderCardDateText>{date}</StyledOrderCardDateText>
      <OrderStatusTagBlock {...{ order }} {...{ renderingStatus }} />
      <Typography text={lineOneTitle} strongText={lineOneStrongText} />
      <SecondLineTypography>{lineTwoTitle}</SecondLineTypography>
      <StyledOrderDetailDescription>{description}</StyledOrderDetailDescription>
      {children}
      <StyledIconBtnWrap>
        {isLeftBtn && <StyledLeftIcon onClick={handleLeftBtnClick} />}
        {isRightBtn && <StyledRightIcon onClick={handleRightBtnClick} />}
      </StyledIconBtnWrap>
    </StyledOrderDetailCardContainer>
  );
};

export default OrderDetailCardContainer;
