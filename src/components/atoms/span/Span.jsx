import { StyledSpan } from './styled';

const Span = ({ children, margin, padding, display, fontSize, fontWeight, color, lineHeight }) => {
  return (
    <StyledSpan
      {...{ margin }}
      {...{ padding }}
      {...{ display }}
      {...{ fontSize }}
      {...{ fontWeight }}
      {...{ color }}
      {...{ lineHeight }}
    >
      {children}
    </StyledSpan>
  );
};

export default Span;
