import { StyledForm } from './styled';

const Form = ({ children, onFormSubmit, margin, border, padding, display, width, height }) => {
  if (typeof children === 'undefined') {
    return null;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onFormSubmit();
  };

  return (
    <StyledForm
      onSubmit={handleFormSubmit}
      {...{ margin }}
      {...{ border }}
      {...{ padding }}
      {...{ display }}
      {...{ width }}
      {...{ height }}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
