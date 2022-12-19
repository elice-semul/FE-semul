import {
  StyledWashBlockContainer,
  StyledWashImage,
  StyledWashBlockTextContainer,
  StyledWashIdText,
  StyledWashNameText,
  StyledCheckIcon,
} from './styled';
const WashBlock = ({ url, id, name, isCompleted }) => {
  return (
    <StyledWashBlockContainer>
      <StyledWashImage src={url} />
      <StyledWashBlockTextContainer>
        <StyledWashIdText>빨래번호: {id}</StyledWashIdText>
        <StyledWashNameText>{name}</StyledWashNameText>
      </StyledWashBlockTextContainer>
      {isCompleted && <StyledCheckIcon />}
    </StyledWashBlockContainer>
  );
};

export default WashBlock;
