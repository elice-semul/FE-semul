import styled from 'styled-components';

export const StyledSelect = styled.select`
  width: ${(props) => props.width || '40px'};
  height: ${(props) => props.height || '40px'};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  transition: 0.5s;
  text-align: center;
  &:hover {
    color: ${(props) => props.theme.colors.background};
    background-color: ${(props) => props.theme.colors.black};
    cursor: pointer;
  }
`;

export const StyledOption = styled.option`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.black};
`;
