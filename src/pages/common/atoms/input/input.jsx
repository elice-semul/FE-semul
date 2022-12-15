import { StyledInput, InputType } from './styled';

const Input = ({
  name,
  value,
  placeholder,
  onInputChange: handleInputChange,
  width,
  height,
  styleType,
}) => {
  return (
    <StyledInput
      onChange={handleInputChange}
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
