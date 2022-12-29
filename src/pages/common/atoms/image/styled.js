import styled from 'styled-components';

export const StyledImage = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  object-fit: ${({ objectFit }) => objectFit || 'cover'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
`;
