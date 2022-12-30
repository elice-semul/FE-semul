import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  StyledHomeHeaderBtnBlock,
  StyledBellIcon,
  StyledfillBellIcon,
  StyledWalletIcon,
} from './styled';

const HomeHeaderBtnBlock = () => {
  const [isBellClick, setIsBellClick] = useState(false);
  const navigate = useNavigate();
  const handleBellIconClick = () => {
    setIsBellClick((prev) => !prev);
  };
  const handleWalletIconClick = () => {
    navigate('/wallet');
  };
  return (
    <StyledHomeHeaderBtnBlock>
      {isBellClick ? (
        <StyledfillBellIcon onClick={handleBellIconClick} />
      ) : (
        <StyledBellIcon onClick={handleBellIconClick} />
      )}
      <StyledWalletIcon onClick={handleWalletIconClick} />
    </StyledHomeHeaderBtnBlock>
  );
};

export default HomeHeaderBtnBlock;
