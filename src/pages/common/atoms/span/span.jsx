import { StyledSpan } from './styled';

const Span = ({ children, ...props }) => {
  return <StyledSpan {...props}>{children}</StyledSpan>;
};

export default Span;
