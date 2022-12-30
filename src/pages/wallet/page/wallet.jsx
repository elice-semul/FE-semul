import { StyledContainer } from './styled';

import useWallet from '@/hooks/useWallet';
import { Typography } from '@/pages/common/sections';
import { WalletMenu, WalletWarning } from '@/pages/wallet/components';

const Wallet = () => {
  const { walletData } = useWallet();
  const currentMoney = walletData.money.toLocaleString();

  return (
    <StyledContainer>
      <Typography text="얼마나 충전할까요?" strongText="충전" />
      <Typography text={`현재 잔액: ${currentMoney}원 `} strongText={currentMoney} />
      <WalletMenu />
      <WalletWarning />
    </StyledContainer>
  );
};

export default Wallet;
