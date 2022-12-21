import { Container, Input, Label } from '@/pages/common/atoms/index';

const LabeledInput = ({
  height,
  width,
  labelContent,
  inputType,
  placeholder,
  register,
  registerName,
}) => {
  return (
    <Container height={height} width={width}>
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
    </Container>
  );
};

export default LabeledInput;
