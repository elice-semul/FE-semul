import { AiOutlineRight } from 'react-icons/ai';

import { StyledContainer } from './styled';

import { Div } from '@/pages/common/atoms';

const Li = ({ type, icon, text, onSetMenuStatus }) => {
  const handleMenuClick = () => {
    onSetMenuStatus(type);
  };

  return (
    <StyledContainer onClick={handleMenuClick}>
      {icon}
      {text}
      <Div position="absolute" right="0" mt="0">
        <AiOutlineRight size="3.2rem" />
      </Div>
    </StyledContainer>
  );
};

export default Li;
