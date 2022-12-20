import { HiOutlineBellAlert, HiBellAlert } from 'react-icons/hi2';
import { IoWalletOutline } from 'react-icons/io5';
import styled from 'styled-components';

export const StyledHomeHeaderBtnBlock = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledBellIcon = styled(HiOutlineBellAlert)`
  color: ${(props) => props.theme.colors.headline};
  font-size: 28px;
`;

export const StyledfillBellIcon = styled(HiBellAlert)`
  color: ${(props) => props.theme.colors.headline};
  font-size: 28px;
`;

export const StyledWalletIcon = styled(IoWalletOutline)`
  color: ${(props) => props.theme.colors.headline};
  font-size: 28px;
`;
