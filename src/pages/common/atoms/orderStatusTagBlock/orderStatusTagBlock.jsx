import {
  StyledOrderStatusTagContainer,
  StyledOrderStatusTag,
  StyledOrderStatusTagText,
  StyledArrowIcon,
} from './styled';

import { getOrderStatusTagProps } from '@/utils/getOrderStatusTagProps';

const OrderStatusTagBlock = ({ order, renderingStatus }) => {
  const { prevCompleted, prevText, nextCompleted, nextText } = getOrderStatusTagProps(
    order.status,
    renderingStatus
  );
  return (
    <StyledOrderStatusTagContainer>
      <StyledOrderStatusTag isCompleted={prevCompleted}>
        <StyledOrderStatusTagText>{prevText}</StyledOrderStatusTagText>
      </StyledOrderStatusTag>
      <StyledArrowIcon />
      <StyledOrderStatusTag isCompleted={nextCompleted}>
        <StyledOrderStatusTagText>{nextText}</StyledOrderStatusTagText>
      </StyledOrderStatusTag>
    </StyledOrderStatusTagContainer>
  );
};

export default OrderStatusTagBlock;
