import styled from 'styled-components';

export const StyledDiv = styled.div`
  margin: ${({ margin }) => margin || '3.2rem 0 0'};
  font-weight: ${({ fontWeight }) => fontWeight || 600};
  font-size: ${({ fontSize }) => fontSize || '2.4rem'};
  line-height: ${({ lineHeight }) => lineHeight || '2.9rem'};
  color: ${({ theme: { colors }, color }) => colors[color] || colors.black};
  position: ${({ position }) => position};
  right: ${({ right }) => right};
`;
