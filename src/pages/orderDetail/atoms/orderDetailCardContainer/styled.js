import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const StyledOrderDetailCardContainer = styled.div`
  width: 100%;
  min-height: 55vh;
  display: flex;
  flex-flow: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 50px;
  white-space: pre-line;
  position: relative;
  overflow: scroll;
  margin-top: 30px;
`;

export const StyledOrderCardDateText = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SecondLineTypography = styled.div`
  margin-bottom: 10px;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.9rem;
`;

export const StyledOrderDetailDescription = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 19.36px;
`;

export const StyledIconBtnWrap = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  right: 50px;
  color: ${(props) => props.theme.colors.headline};
`;

export const StyledLeftIcon = styled(IoArrowBackOutline)`
  font-size: 20px;
  cursor: pointer;
`;

export const StyledRightIcon = styled(IoArrowForwardOutline)`
  font-size: 20px;
  cursor: pointer;
`;
