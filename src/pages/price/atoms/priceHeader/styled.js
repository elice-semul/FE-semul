import styled from 'styled-components';

import { theme } from '@/styles/theme' 

export const StyledSearchInput = styled.input`
  background-color: ${ theme.colors.gray100 };
  width: 95%;
  height: 25px;
  border: 0;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  padding: 0 2.4rem;
  position:relative;
`;

export const StyledPriceDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledPriceIconDiv = styled.div`
  position: absolute;
  z-index: 999;
  left:5px;
  top:4px;
`;