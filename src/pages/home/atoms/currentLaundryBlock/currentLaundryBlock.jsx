import { useState } from 'react';

import {
  StyledTextLayoutContainer,
  StyledOrderCreatedDateText,
  StyledArrowDownIcon,
  StyledCurrentLaundryBlockContainer,
  NonStyledBtnContainer,
} from './styled';

import { OrderStatusTagBlock, OrderImageSummaryBlock } from '@/pages/common/atoms';
import { dateFormatCommon } from '@/utils/dateFormating';

const CurrentLaundryBlock = ({ currentOrder }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleBlockClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <StyledCurrentLaundryBlockContainer>
      <NonStyledBtnContainer onClick={handleBlockClick}>
        <StyledTextLayoutContainer>
          <StyledOrderCreatedDateText>{`주문번호: ${currentOrder.orderNum} | ${dateFormatCommon(
            currentOrder.createdAt
          )}`}</StyledOrderCreatedDateText>
          <StyledArrowDownIcon />
        </StyledTextLayoutContainer>
        <OrderStatusTagBlock order={currentOrder} />
      </NonStyledBtnContainer>

      {isClicked && (
        <OrderImageSummaryBlock
          key={currentOrder.id}
          orderId={currentOrder.id}
          products={currentOrder.orderProducts}
        />
      )}
    </StyledCurrentLaundryBlockContainer>
  );
};

export default CurrentLaundryBlock;
