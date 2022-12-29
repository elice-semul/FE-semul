import {
  StyledHomeBannerContainer,
  StyledHomeBannerImage,
  StyledHomeBannerOverlay,
  StyledHomeBannerTitle,
  StyledHomeBannerTextContainer,
  StyledHomeBannerDescription,
  StyledHomeBannerWrap,
} from './styled';

const HomeBanner = () => {
  return (
    <StyledHomeBannerWrap>
      <StyledHomeBannerContainer>
        <StyledHomeBannerImage src="https://semul.s3.ap-northeast-2.amazonaws.com/homeBtnImage-2.jpg" />
        <StyledHomeBannerOverlay />
        <StyledHomeBannerTextContainer>
          <StyledHomeBannerTitle>새물 Grand Open 이벤트</StyledHomeBannerTitle>
          <StyledHomeBannerDescription>최대 80% 할인 중</StyledHomeBannerDescription>
        </StyledHomeBannerTextContainer>
      </StyledHomeBannerContainer>
    </StyledHomeBannerWrap>
  );
};

export default HomeBanner;
