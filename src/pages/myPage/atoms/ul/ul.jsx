import { StyledContainer } from './styled';

const Ul = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Ul;
