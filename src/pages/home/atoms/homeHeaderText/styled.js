import styled from 'styled-components';

export const StyledHomeHeaderTextBlock = styled.div`
  display: flex;
  width: 250px;
  height: 4vh;
  align-items: center;
  .caretDownIcon {
    font-size: 20px;
  }
`;
export const StyledHomeHeaderText = styled.div`
  font-size: 18px;
  margin-right: 10px;
  color: ${(props) => props.theme.colors.headline};
  font-weight: 700;
`;
