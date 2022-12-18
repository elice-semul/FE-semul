import styled from 'styled-components';

export const StyledEmptyLaundryBlockContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 14.65vh;
  padding: 27px 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 0;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 20px;
  font-weight: 700;
`;
