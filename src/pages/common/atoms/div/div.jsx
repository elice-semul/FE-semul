import { StyledDiv } from './styled';

const Div = ({ children, ...props }) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Div;
