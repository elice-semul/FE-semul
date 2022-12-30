import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledContainer } from './styled';

import useWallet from '@/hooks/useWallet';
import { MyPageTypographys } from '@/pages/myPage/components';
import { MyPageMenu } from '@/pages/myPage/sections';

const MyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('Authorization')) {
      navigate('/login');
    }
  });

  const { walletData } = useWallet();

  if (!walletData) {
    return null;
  }

  return (
    <StyledContainer>
      <MyPageTypographys money={walletData.money.toLocaleString()} />
      <MyPageMenu />
    </StyledContainer>
  );
};

export default MyPage;
