import { useState } from 'react';

import {
  StyledTextLayoutContainer,
  StyledOrderCreatedDateText,
  StyledArrowDownIcon,
  StyledCurrentLaundryBlockContainer,
  NonStyledBtnContainer,
} from './styled';

import { OrderStatusTagBlock, OrderImageSummaryBlock } from '@/pages/common/atoms';

const CurrentLaundryBlock = ({ currentOrder }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleBlockClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <StyledCurrentLaundryBlockContainer>
      <NonStyledBtnContainer onClick={handleBlockClick}>
        <StyledTextLayoutContainer>
          <StyledOrderCreatedDateText>{`주문번호: ${currentOrder.id} | ${currentOrder.pickUpDateTime}`}</StyledOrderCreatedDateText>
          <StyledArrowDownIcon />
        </StyledTextLayoutContainer>
        <OrderStatusTagBlock orderStatus={currentOrder.status} />
      </NonStyledBtnContainer>

      {isClicked && (
        <OrderImageSummaryBlock
          key={currentOrder.id}
          orderId={currentOrder.id}
          products={currentOrder.orderProduct}
        />
      )}
    </StyledCurrentLaundryBlockContainer>
  );
};

export default CurrentLaundryBlock;
