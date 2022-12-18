import { Container, Span } from '@/pages/common/atoms/index';
import { theme } from '@/styles/theme';
const OrderHeader = ({ height, width, userName, content }) => {
  return (
    <Container height={height} width={width}>
      <Span fontSize="32px" fontWeight="900" color={theme.colors.primary}>
        세물
        {/* {userName} */}
      </Span>
      <Span fontSize="32px" fontWeight="900">
        님 세탁을 도와드릴게요!
        {/* {content} */}
      </Span>
    </Container>
  );
};

export default OrderHeader;
