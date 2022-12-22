import {
  StyledWashBlockContainer,
  StyledWashImage,
  StyledWashBlockTextContainer,
  StyledWashIdText,
  StyledWashNameText,
  StyledCheckIcon,
} from './styled';
const WashBlock = ({ id, name, isCompleted, qty }) => {
  return (
    <StyledWashBlockContainer>
      <StyledWashImage src="../src/assets/images/clothThumbnail-1.jpeg" />
      <StyledWashBlockTextContainer>
        <StyledWashIdText>빨래번호: {id}</StyledWashIdText>
        <StyledWashNameText>
          {name} {qty}종
        </StyledWashNameText>
      </StyledWashBlockTextContainer>
      {isCompleted && <StyledCheckIcon />}
    </StyledWashBlockContainer>
  );
};

export default WashBlock;
