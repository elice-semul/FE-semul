import { useState } from 'react';

import {
  StyledTextLayoutContainer,
  StyledOrderCreatedDateText,
  StyledArrowDownIcon,
  StyledCurrentLaundryBlockContainer,
} from './styled';

import { OrderStatusTagBlock, OrderImageSummaryBlock } from '@/pages/common/atoms';

const CurrentLaundryBlock = ({ currentOrder }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleBlockClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <StyledCurrentLaundryBlockContainer onClick={handleBlockClick}>
      <StyledTextLayoutContainer>
        <StyledOrderCreatedDateText>{currentOrder.date}</StyledOrderCreatedDateText>
        <StyledArrowDownIcon />
      </StyledTextLayoutContainer>
      <OrderStatusTagBlock
        prevCompleted={currentOrder.prevCompleted}
        prevText={currentOrder.prevText}
        nextCompleted={currentOrder.nextCompleted}
        nextText={currentOrder.nextText}
      />
      {isClicked && <OrderImageSummaryBlock />}
    </StyledCurrentLaundryBlockContainer>
  );
};

export default CurrentLaundryBlock;
