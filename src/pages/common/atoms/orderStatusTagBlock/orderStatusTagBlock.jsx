import {
  StyledOrderStatusTagContainer,
  StyledOrderStatusTag,
  StyledOrderStatusTagText,
  StyledArrowIcon,
} from './styled';

const OrderStatusTagBlock = ({ prevCompleted, prevText, nextCompleted, nextText }) => {
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
