import {
  StyledWashBlockContainer,
  StyledWashImage,
  StyledWashBlockTextContainer,
  StyledWashIdText,
  StyledWashNameText,
  StyledCheckIcon,
} from './styled';
const WashBlock = () => {
  return (
    <StyledWashBlockContainer>
      <StyledWashImage src="../src/assets/images/clothThumbnail-1.jpeg" />
      <StyledWashBlockTextContainer>
        <StyledWashIdText>빨래번호: 000000111</StyledWashIdText>
        <StyledWashNameText>일반 패딩</StyledWashNameText>
      </StyledWashBlockTextContainer>
      <StyledCheckIcon />
    </StyledWashBlockContainer>
  );
};

export default WashBlock;
