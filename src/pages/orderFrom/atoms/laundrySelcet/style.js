import styled from 'styled-components';

import { theme } from '@/styles/theme';
export const StyledSelect = styled.select`
  background-color: ${theme.colors.gray100};
  width: 100%;
  height: 60px;
  padding: 23px 16px;
  border-radius: 10px;
  border: ${theme.colors.gray100};
  border:
  font-size: 12px;
  transition: 0.5s;
  text-align: left;
  &:hover {
    color: ${theme.colors.black};
    border: ${theme.colors.gray100};
    background-color: ${theme.colors.gray200};
    cursor: pointer;
  }
`;

export const StyledOption = styled.option`
  color: ${theme.colors.black};
  background-color: ${theme.colors.background};
`;
