import StyledP from './styled';

const P = ({ children, margin, padding, display, lineHeight, fontSize, color }) => {
  return (
    <StyledP
      {...{ margin }}
      {...{ padding }}
      {...{ display }}
      {...{ fontSize }}
      {...{ color }}
      {...{ lineHeight }}
    >
      {children}
    </StyledP>
  );
};

export default P;
