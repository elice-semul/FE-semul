import styled from 'styled-components';

const StyledP = styled.p`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
`;
export default StyledP;
