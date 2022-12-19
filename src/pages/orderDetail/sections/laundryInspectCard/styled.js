import styled from 'styled-components';

export const StyledInspectSheetBtn = styled.button`
  height: 4.88vh;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  margin-top: 16px;
  cursor: pointer;
`;
