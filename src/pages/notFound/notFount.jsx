import { useNavigate } from 'react-router-dom';

import {
  StyledLoginContainer,
  StyledLogo,
  StyledErrorTitleText,
  StyledErrorSubTitleText,
  StyledErrorParagraph,
  StyledErrorHomeBtn,
} from './styled';
const NotFound = () => {
  const navigate = useNavigate();
  const handleHomeBtnClick = () => {
    navigate('/');
  };
  return (
    <StyledLoginContainer>
      <StyledLogo>새물</StyledLogo>
      <StyledErrorTitleText>404 Not Found</StyledErrorTitleText>
      <StyledErrorSubTitleText>페이지를 찾을 수 없습니다.</StyledErrorSubTitleText>
      <StyledErrorParagraph>
        요청하신 페이지는 존재하지 않습니다. <br />
        정확한 URL 주소를 입력해주세요.
      </StyledErrorParagraph>
      <StyledErrorHomeBtn onClick={handleHomeBtnClick}>홈으로 돌아가기</StyledErrorHomeBtn>
    </StyledLoginContainer>
  );
};

export default NotFound;
