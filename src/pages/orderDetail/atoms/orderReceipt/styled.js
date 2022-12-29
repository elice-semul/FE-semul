import styled from 'styled-components';

export const StyledOrderReceiptContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-top: 1px solid ${(props) => props.theme.colors.gray300};
  padding: 20px 10px;
`;

export const StyledTextBlock = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const StyledReceiptText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;

export const StyledReceiptStrongText = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  color: ${(props) => props.theme.colors.primary};
`;

export const StyledReceiptdescription = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 10px;
`;
