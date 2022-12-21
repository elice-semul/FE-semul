import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

import { Button, Container, Flex, Span } from '@/pages/common/atoms/index';
import { theme } from '@/styles/theme';

const SpecTable = ({ table, onRemoveBtnClick }) => {
  const list = table.map((value, idx) => (
    <tr key={idx}>
      <td>{value.option}</td>
      <td>{value.quantity}개</td>
      <td>
        <Button type="button" onBtnClick={onRemoveBtnClick(idx)}>
          <AiOutlineClose />
        </Button>
      </td>
    </tr>
  ));
  return (
    <StyledPriceTable>
      <thead>
        <tr>
          <th>종류</th>
          <th>수량</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </StyledPriceTable>
  );
};

export const StyledPriceTable = styled.table`
  width: 100%;
  font-size: 16px;

  th {
    width: 50%;
    text-align: left;
    padding: 1.5rem 1rem;
    vertical-align: middle;
    font-weight: 500;
    border: 1px solid ${theme.colors.gray100};
  }

  td {
    padding: 1rem;
    vertical-align: middle;
    border-bottom: 1px solid ${theme.colors.gray100};
  }

  td:first-child {
    width: 65%;
    text-align: left;
  }

  td:last-child {
    width: 35%;
    text-align: right;
  }
`;

export default SpecTable;
