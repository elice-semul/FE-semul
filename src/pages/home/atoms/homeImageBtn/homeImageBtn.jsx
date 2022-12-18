import {
  StyledHomeImageBtnContainer,
  StyledHomeBtnImage,
  StyledHomeImageBtnTextContainer,
  StyledHomeImageBtnTitle,
  StyledHomeImageBtnParagraph,
} from './styled';

const HomeImageBtn = ({ url, title, paragraph }) => {
  return (
    <StyledHomeImageBtnContainer>
      <StyledHomeBtnImage src={url} />
      <StyledHomeImageBtnTextContainer>
        <StyledHomeImageBtnTitle>{title}</StyledHomeImageBtnTitle>
        <StyledHomeImageBtnParagraph>{paragraph}</StyledHomeImageBtnParagraph>
      </StyledHomeImageBtnTextContainer>
    </StyledHomeImageBtnContainer>
  );
};

export default HomeImageBtn;
