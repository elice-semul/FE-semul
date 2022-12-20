import { IoIosArrowRoundForward } from 'react-icons/io';
import styled, { css } from 'styled-components';

export const StyledOrderStatusTagContainer = styled.div`
  display: flex;
  width: 70%;
  height: 3.9vh;
  justify-content: space-between;
  align-items: center;
`;

export const StyledOrderStatusTag = styled.div`
  width: 43%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray200};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isCompleted &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
    `}
`;

export const StyledOrderStatusTagText = styled.p`
  font-size: 16px;
`;

export const StyledArrowIcon = styled(IoIosArrowRoundForward)`
  font-size: 20px;
`;
