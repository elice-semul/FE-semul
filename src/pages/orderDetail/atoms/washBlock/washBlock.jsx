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
      <StyledWashImage src="https://semul.s3.ap-northeast-2.amazonaws.com/clothThumbnail-1.jpeg" />
      <StyledWashBlockTextContainer>
        <StyledWashNameText>
          {name} {qty}개
        </StyledWashNameText>
      </StyledWashBlockTextContainer>
      {isCompleted && <StyledCheckIcon />}
    </StyledWashBlockContainer>
  );
};

export default WashBlock;
