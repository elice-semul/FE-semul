import { StyledInput, InputType } from './styled';

const Input = ({
  name,
  value,
  placeholder,
  onInputChange: handleInputChange,
  width,
  height,
  styleType,
  type,
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
      {...{ type }}
    />
  );
};

Input.defaultProps = {
  styleType: InputType.DEFAULT,
};

export default Input;
