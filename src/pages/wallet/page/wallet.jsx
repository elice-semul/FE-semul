import { StyledContainer } from './styled';

import { Footer } from '@/pages/common/components';
import { Typography } from '@/pages/common/sections';
import { WalletMenu, WalletWarning } from '@/pages/wallet/components';

const Wallet = () => {
  return (
    <StyledContainer>
      <Typography text="얼마나 충전할까요?" strongText="충전" />
      <WalletMenu />
      <WalletWarning />
    </StyledContainer>
  );
};

export default Wallet;
