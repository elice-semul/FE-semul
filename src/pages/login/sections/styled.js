import styled from 'styled-components';

export const StyledLogo = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  font-weight: bold;
  margin : 2rem auto;
  color: ${({ theme: { colors }, color }) => colors[color] || colors.primary};
`;

export const StyledLoginContainer = styled.div`
  margin : auto 4rem;
  display: grid;
  align-content: center;
  min-height: 80vh;
`;