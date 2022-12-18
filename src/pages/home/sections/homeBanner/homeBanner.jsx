import {
  StyledHomeBannerContainer,
  StyledHomeBannerImage,
  StyledHomeBannerOverlay,
  StyledHomeBannerTitle,
  StyledHomeBannerTextContainer,
  StyledHomeBannerDescription,
} from './styled';

const HomeBanner = () => {
  return (
    <StyledHomeBannerContainer>
      <StyledHomeBannerImage src="src/assets/images/homeBtnImage-2.jpg" />
      <StyledHomeBannerOverlay />
      <StyledHomeBannerTextContainer>
        <StyledHomeBannerTitle>새물 Grand Open 이벤트</StyledHomeBannerTitle>
        <StyledHomeBannerDescription>최대 80% 할인 중</StyledHomeBannerDescription>
      </StyledHomeBannerTextContainer>
    </StyledHomeBannerContainer>
  );
};

export default HomeBanner;
