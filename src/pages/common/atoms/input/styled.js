import styled, { css } from 'styled-components';

export const InputType = {
  DEFAULT: 'default',
  LOGIN: 'login',
  ORDER: 'order',
};

export const StyledInput = styled.input`
  background-color: ${({ styleType, theme }) =>
    styleType === InputType.LOGIN ? theme.colors.background : theme.colors.gray100};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '40px'};
  border: 0px;
  border-radius: 15px;
  font-size: 12px;
  padding: 0 16px;

  ${({ styleType, theme }) =>
    styleType === InputType.LOGIN &&
    css`
      height: ${({ height }) => height || '52px'}l
      font-size: 16px;
      padding: 18px 16px;
      border-bottom: 1px solid ${theme.colors.gray300};
      border-radius: 0;
      margin-bottom: 16px;
    `}

  ${({ styleType }) =>
    styleType === InputType.ORDER &&
    css`
      height: ${({ height }) => height || '60px'};
      padding: 23px 16px;
      border-radius: 10px;
    `}
`;
