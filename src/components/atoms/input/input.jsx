import { StyledInput, InputType } from './styled';

const Input = ({ name, value, placeholder, handleInputChange, width, height, styleType }) => {
  return (
    <StyledInput
      onInputChange={handleInputChange}
      {...{ name }}
      {...{ value }}
      {...{ placeholder }}
      {...{ styleType }}
      {...{ width }}
      {...{ height }}
    />
  );
};

Input.defaultProps = {
  styleType: InputType.DEFAULT,
};

export default Input;
