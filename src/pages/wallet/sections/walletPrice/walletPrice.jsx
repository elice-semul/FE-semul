import { Container } from '@/pages/common/atoms';
import { Typography } from '@/pages/common/sections';

const WalletPrice = ({ ...props }) => {
  return (
    <Container
      margin="1.6rem 0 0"
      padding="4.6rem 3.2rem"
      shadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      radius="1rem"
    >
      <Typography divStyle={{ margin: '0' }} {...props} />
    </Container>
  );
};

export default WalletPrice;
