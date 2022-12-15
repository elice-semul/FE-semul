import { StyledSpan } from '@/components/atoms/span/styled';

export function Span({
  children,
  margin,
  padding,
  display,
  fontSize,
  fontWeight,
  color,
  lineHeight,
}) {
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
}
