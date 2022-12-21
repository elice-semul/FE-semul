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
        {...register(registerName, { require: '필수값을 확인하세요' })}
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
    />
  );
};
Input.defaultProps = {
  styleType: InputType.DEFAULT,
};

export default Input;
