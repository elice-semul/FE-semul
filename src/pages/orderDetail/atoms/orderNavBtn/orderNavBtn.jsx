import { StyledNavBtn, StyledActiveNavBtn } from './styled';
const OrderNavBtn = ({ children, isActive, onNavBtnClick: handleNavBtnClick }) => {
  return isActive ? (
    <StyledActiveNavBtn onClick={handleNavBtnClick}>{children}</StyledActiveNavBtn>
  ) : (
    <StyledNavBtn onClick={handleNavBtnClick}>{children}</StyledNavBtn>
  );
};

export default OrderNavBtn;
