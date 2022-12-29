import React from 'react';
import styled from 'styled-components';

import { Container, Input, Label } from '@/pages/common/atoms/index';

const LabeledInputAndBtn = ({
  children,
  height,
  width,
  inputType,
  labelContent,
  placeholder,
  register,
  registerName,
}) => {
  return (
    <Container height={height} width={width} position="relative">
      <Label lineHeight="40px" fontSize="14px" padding="0px 0px 0px 10px">
        {labelContent}
      </Label>
      <Input
        styleType="order"
        placeholder={placeholder}
        register={register}
        registerName={registerName}
        type={inputType}
      />
      {inputType !== 'date' && <StyledButton type="button">{children}</StyledButton>}
    </Container>
  );
};
const StyledButton = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  bottom: 10px;
  right: 10px;
  border: none;
`;

export default LabeledInputAndBtn;
