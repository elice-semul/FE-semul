import styled from 'styled-components';

export const Span = styled.span`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
`;
