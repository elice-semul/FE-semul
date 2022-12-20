import { useNavigate } from 'react-router-dom';

import {
  StyledHomeImageBtnContainer,
  StyledHomeImageBtnTextContainer,
  StyledHomeImageBtnTitle,
  StyledHomeImageBtnParagraph,
  StyledMoneyIcons,
  StyledLaundryIcons,
} from './styled';

const getRenderingIcon = (title) => {
  return title === '세탁 가격' ? <StyledMoneyIcons /> : <StyledLaundryIcons />;
};

const HomeImageBtn = ({ title, paragraph }) => {
  const navigate = useNavigate();
  const handleButtonClick = () =>
    title === '세탁 가격' ? navigate('/price') : navigate('order/form');
  return (
    <StyledHomeImageBtnContainer onClick={(title) => handleButtonClick(title)}>
      {getRenderingIcon(title)}
      <StyledHomeImageBtnTextContainer>
        <StyledHomeImageBtnTitle>{title}</StyledHomeImageBtnTitle>
        <StyledHomeImageBtnParagraph>{paragraph}</StyledHomeImageBtnParagraph>
      </StyledHomeImageBtnTextContainer>
    </StyledHomeImageBtnContainer>
  );
};

export default HomeImageBtn;
