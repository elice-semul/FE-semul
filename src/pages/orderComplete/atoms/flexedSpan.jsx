import { Flex, Span } from '@/pages/common/atoms/index';

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
      <Span fontSize="15px" fontWeight="normal">
        {infomationTitle}
      </Span>
      <Span
        color={contentColor}
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
