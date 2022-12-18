import { Container, Flex, Span } from '@/pages/common/atoms/index';

const FlexedSpan = ({ title, content }) => {
  return (
    <Flex>
      <Container width="23%" margin="0 0 10px 0">
        <Span fontSize="14px" fontWeight="bold">
          {title}
        </Span>
      </Container>
      <Span fontSize="14px">{content}</Span>
    </Flex>
  );
};

export default FlexedSpan;
