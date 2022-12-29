import styled from 'styled-components';

import { theme } from '@/styles/theme';

export const StyledUpdateInput = styled.input`
  background-color: ${theme.colors.gray100};
  width: 100%;
  height: 40px;
  border: ${({ border }) => border || 'none'};
  &:focus {
    outline: none;
  }
  border-radius: 1.5rem;
  font-size: 1.6rem;
  padding: 0 1.6rem;
  margin-bottom: 2rem;
`;

export const StyledUpdateLabel = styled.label`
  margin: 1rem 2rem;
  padding: ${({ padding }) => padding};
  display: block;
  font-size: 1.6rem;
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
`;
