import styled from 'styled-components';

export const StyledContainer = styled.footer`
  width: 100%;
  max-width: 440px;
  position: fixed;
  bottom: 0;
  background-color: ${({ theme: { colors } }) => colors.background};
  border-radius: 2.5rem 2.5rem 0 0;
`;
