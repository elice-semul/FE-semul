import styled from 'styled-components';

export const StyledSpan = styled.span`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme: { colors }, color }) => colors[color]};
  line-height: ${({ lineHeight }) => lineHeight};
`;
