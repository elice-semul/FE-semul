import { useNavigate } from 'react-router-dom';

import { StyledContainer } from './styled';

import { Footer } from '@/pages/common/components';
import { MyPageTypographys } from '@/pages/myPage/components';
import { MyPageMenu } from '@/pages/myPage/sections';

export const MENU_STATUS = {
  MODIFIED: 'modified',
  WALLET: 'wallet',
  LOGOUT: 'logout',
  WITHDRAWAL: 'withdrawal',
};

const MyPage = () => {
  const navigate = useNavigate();

  const handleMenuClick = (type) => {
    if (type === MENU_STATUS.WALLET) {
      navigate('/wallet');
    }
  };

  return (
    <>
      <StyledContainer>
        <MyPageTypographys />
        <MyPageMenu onMenuClick={handleMenuClick} />
      </StyledContainer>
      <Footer />
    </>
  );
};

export default MyPage;
