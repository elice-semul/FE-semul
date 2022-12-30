import styled from 'styled-components';

export const StyledHandleBtnBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const StyledCancleBtn = styled.button`
  border: 0;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.warning};
  cursor: pointer;
`;

export const StyledUpdateBtn = styled.button`
  border: 0;
  width: 100%;
  height: 40px;
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.headline};
  cursor: pointer;
`;
