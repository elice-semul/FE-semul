import { useLocation } from 'react-router';

import { StyledContainer } from './styled';

import { Typography } from '@/pages/common/sections';
import { WalletMenu, WalletWarning } from '@/pages/wallet/components';

const Wallet = () => {
  const { state } = useLocation();

  return (
    <StyledContainer>
      <Typography text="얼마나 충전할까요?" strongText="충전" />
      <Typography text={`현재 잔액: ${state}원 `} strongText={state} />
      <WalletMenu />
      <WalletWarning />
    </StyledContainer>
  );
};

export default Wallet;
