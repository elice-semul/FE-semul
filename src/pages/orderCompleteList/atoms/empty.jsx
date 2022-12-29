import { Container, Span } from '@/pages/common/atoms/index';

const Empty = () => {
  return (
    <Container width="100%" margin="15% auto">
      <Span fontSize="3rem" fontWeight="bold" color="primary">
        이용내역이 없어요!
      </Span>
    </Container>
  );
};

export default Empty;
