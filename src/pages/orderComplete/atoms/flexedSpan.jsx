import { Flex, Span } from '@/pages/common/atoms/index';
import { theme } from '@/styles/theme';
const FlexedSpan = ({
  infomationTitle,
  infomationContent,
  contentColor,
  contentSize,
  contentWeight,
  flexDirection,
  margin,
}) => {
  return (
    <Flex justifyContent="space-between" flexDirection={flexDirection} margin={margin || '8px 5px'}>
      <Span fontSize="15px" fontWeight="normal" color="black">
        {infomationTitle}
      </Span>
      <Span
        color={contentColor || 'black'}
        fontSize={contentSize || '15px'}
        fontWeight={contentWeight}
        margin={flexDirection === 'column' ? '15px 0' : '0'}
      >
        {infomationContent}
      </Span>
    </Flex>
  );
};

export default FlexedSpan;
