import styled from 'styled-components';

export const StyledLoginContainer = styled.div`
  margin: auto 4rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

export const StyledLogo = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  font-weight: bold;
  margin: 2rem auto;
  color: ${({ theme: { colors }, color }) => colors[color] || colors.primary};
`;

export const StyledErrorBlock = styled.div`
  margin: 30px;
`;

export const StyledErrorTitleText = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  margin-top: 30px;
  text-align: center;
`;

export const StyledErrorSubTitleText = styled.h3`
  font-size: 2.4rem;
  font-weight: 600;
  margin-top: 20px;
  text-align: center;
`;

export const StyledErrorParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-top: 20px;
  text-align: center;
`;

export const StyledErrorHomeBtn = styled.button`
  height: 40px;
  border: 0;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  margin-top: 30px;
  width: 50%;
  border-radius: 10px;
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
  }
`;
