import { IoCheckmarkSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const StyledWashBlockContainer = styled.div`
  width: 100%;
  height: 9.76vh;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  padding: 15px 20px;
`;

export const StyledWashImage = styled.img`
  width: 15.9vw;
  height: 6.8359vh;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 10px;
  margin-right: 20px;
  object-fit: cover;
`;

export const StyledWashBlockTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
`;

export const StyledWashIdText = styled.q`
  font-size: 14px;
  line-height: 17.47px;
`;

export const StyledWashNameText = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
`;

export const StyledCheckIcon = styled(IoCheckmarkSharp)`
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  margin: auto;
  margin-right: 10px;
`;
