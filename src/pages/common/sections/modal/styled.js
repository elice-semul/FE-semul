import styled from 'styled-components';

export const StyledLayout = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  cursor: pointer;
`;

export const StyledContainer = styled.section`
  position: relative;
  margin-left: 53.3%;
  margin-right: 46.7%;
  max-width: 440px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
  }

  @media only screen and (max-width: 440px) {
    margin: 0;
  }
`;

export const StyledContentContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 26vh;
  border-radius: 6px 6px 0 0;
  background-color: ${({ theme: { colors } }) => colors.background};
  cursor: default;
`;

export const StyledTitle = styled.h4`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const StyledButtonContainer = styled.div`
  margin-top: 3.2rem;
  display: flex;
  gap: 3.2rem;
`;
