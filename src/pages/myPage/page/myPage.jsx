import { useNavigate } from 'react-router-dom';

import { StyledContainer } from './styled';

import { MyPageTypographys } from '@/pages/myPage/components';
import { MyPageMenu } from '@/pages/myPage/sections';

export const MENU_STATUS = {
  MODIFIED: 'modified',
  WALLET: 'wallet',
  LOGOUT: 'logout',
  WITHDRAWAL: 'withdrawal',
};

const MyPage = () => {
  const money = (1234567).toLocaleString();
  const navigate = useNavigate();

  const handleMenuClick = (type) => {
    if (type === MENU_STATUS.WALLET) {
      navigate('/wallet', { state: money });
    }
  };

  return (
    <StyledContainer>
      <MyPageTypographys {...{ money }} />
      <MyPageMenu onMenuClick={handleMenuClick} />
    </StyledContainer>
  );
};

export default MyPage;
