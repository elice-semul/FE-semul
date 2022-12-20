import styled from 'styled-components';

import { theme } from '@/styles/theme' 

export const StyledPriceTable = styled.table`
  width:100%;
  font-size:16px;

    th {
      width:50%;
      text-align: left;
      padding: 1.5rem 1rem;
      vertical-align: middle;
      font-weight: 500;
      border: 1px solid ${ theme.colors.gray100 };
    }

    td {
      padding: 1rem;
      vertical-align: middle;
      border-bottom: 1px solid ${ theme.colors.gray100 };
    }

    td:first-child {
      width:65%;
      text-align: left;
    }

    td:last-child {
      width:35%;
      text-align: right;
    }
`