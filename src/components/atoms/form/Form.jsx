import * as S from '@/components/atoms/form/styled';

export function Form({ children, onFormSubmit, margin, padding, border, borderRadius }) {
  if (typeof children === 'undefined') {
    return null;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onFormSubmit();
  };

  return (
    <S.Form
      onSubmit={handleFormSubmit}
      {...{ margin }}
      {...{ padding }}
      {...{ border }}
      {...{ borderRadius }}
    >
      {children}
    </S.Form>
  );
}
