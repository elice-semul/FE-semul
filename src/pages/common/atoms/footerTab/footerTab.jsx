import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledContainer } from './styled';

import { Flex, Span } from '@/pages/common/atoms';

const FooterTab = ({ idle, hover, text, path }) => {
  const navigate = useNavigate();
  const [isIconOver, setIsIconOver] = useState(false);

  const handleTabOver = () => {
    setIsIconOver(true);
  };

  const handleTabOut = () => {
    setIsIconOver(false);
  };

  const handleTabClick = () => {
    navigate(path);
  };

  return (
    <StyledContainer onMouseOver={handleTabOver} onMouseOut={handleTabOut} onClick={handleTabClick}>
      <Flex width="7rem" flexDirection="column" justifyContent="center" alignItems="center">
        {isIconOver ? <div>{hover}</div> : <div>{idle}</div>}
        <Span
          display="block"
          margin="0.8rem 0 0"
          color="headline"
          fontSize="1.4rem"
          fontWeight="600"
          lineHeight="1.7rem"
        >
          {text}
        </Span>
      </Flex>
    </StyledContainer>
  );
};

export default FooterTab;
