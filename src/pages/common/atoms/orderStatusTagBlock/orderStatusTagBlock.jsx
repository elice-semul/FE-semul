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
      <StyledOrderStatusTag isCompleted={prevCompleted} status={order.status}>
        <StyledOrderStatusTagText>{prevText}</StyledOrderStatusTagText>
      </StyledOrderStatusTag>
      <StyledArrowIcon />
      <StyledOrderStatusTag isCompleted={nextCompleted} status={order.status}>
        <StyledOrderStatusTagText>{nextText}</StyledOrderStatusTagText>
      </StyledOrderStatusTag>
    </StyledOrderStatusTagContainer>
  );
};

export default OrderStatusTagBlock;
