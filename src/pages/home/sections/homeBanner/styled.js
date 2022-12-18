import styled from 'styled-components';

export const StyledHomeBannerContainer = styled.div`
  height: 10vh;
  position: relative;
`;

export const StyledHomeBannerImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
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
  font-size: 25px;
  font-weight: 700;
`;

export const StyledHomeBannerDescription = styled.p`
  font-size: 20px;
`;
