import * as S from '@/components/atoms/span/styled';

export function Span({ children, text, margin, padding, display, fontSize, color, lineHeight }) {
  if (typeof children === 'object') {
    return (
      <S.Span
        {...{ margin }}
        {...{ padding }}
        {...{ display }}
        {...{ fontSize }}
        {...{ color }}
        {...{ lineHeight }}
      >
        {children}
      </S.Span>
    );
  }

  return (
    <S.Span
      {...{ margin }}
      {...{ padding }}
      {...{ display }}
      {...{ fontSize }}
      {...{ color }}
      {...{ lineHeight }}
    >
      {text}
    </S.Span>
  );
}
