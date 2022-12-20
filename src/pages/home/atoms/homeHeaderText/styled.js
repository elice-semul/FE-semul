import styled from 'styled-components';

export const StyledHomeHeaderTextBlock = styled.div`
  display: flex;
  width: 250px;
  height: 4vh;
  align-items: center;
  word-break: keep-all;
  cursor: pointer;
  .caretDownIcon {
    font-size: 20px;
  }
`;
export const StyledHomeHeaderText = styled.div`
  font-size: 16px;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`;
