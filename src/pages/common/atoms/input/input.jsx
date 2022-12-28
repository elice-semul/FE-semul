import React from 'react';

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
  register,
  registerName,
  ...props
}) => {
  if (register && registerName) {
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
        {...register(registerName)}
        {...props}
      />
    );
  }
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
      {...props}
    />
  );
};
Input.defaultProps = {
  styleType: InputType.DEFAULT,
};

export default Input;
