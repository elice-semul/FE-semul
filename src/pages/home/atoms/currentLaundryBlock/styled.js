import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

export const StyledCurrentLaundryBlockContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 27px 30px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: 0;
  background-color: ${(props) => props.theme.colors.background};
  margin-bottom: 20px;
`;

export const StyledTextLayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledOrderCreatedDateText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const StyledArrowDownIcon = styled(IoIosArrowDown)`
  font-size: 40px;
`;

export const NonStyledBtnContainer = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border: 0;
  cursor: pointer;
`;
