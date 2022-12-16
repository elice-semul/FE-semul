import styled from 'styled-components';

export const StyledContainer = styled.ul`
  margin: ${({ margin }) => margin || '3.2rem 0 0'};

  li + li {
    margin: ${({ sMargin }) => sMargin || '1.6rem 0 0'};
  }
`;
