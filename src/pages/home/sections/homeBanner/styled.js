import styled from 'styled-components';
export const StyledHomeBannerWrap = styled.div`
  width: 100%;
`;

export const StyledHomeBannerContainer = styled.div`
  height: 220px;
  position: relative;
  margin-top: 5rem;
`;

export const StyledHomeBannerImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  opacity:0.8;
`;

export const StyledHomeBannerOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray100};
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledHomeBannerTextContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledHomeBannerTitle = styled.h1`
  font-size: 3.4rem;
  font-weight: 700;
`;

export const StyledHomeBannerDescription = styled.p`
  font-size: 2.8rem;
`;
