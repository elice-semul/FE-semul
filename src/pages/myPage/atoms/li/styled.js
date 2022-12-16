import styled from 'styled-components';

export const StyledContainer = styled.li`
  padding: ${({ padding }) => padding || '1.6rem 0.8rem'};
  position: ${({ position }) => position || 'relative'};
  display: ${({ display }) => display || 'flex'};
  gap: ${({ gap }) => gap || '0.8rem'};
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  line-height: ${({ lineHeight }) => lineHeight || '1.9rem'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  cursor: ${({ cursor }) => cursor || 'pointer'};
`;
