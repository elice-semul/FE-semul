import styled from 'styled-components';

import { Container, Input, Label, Select } from '@/pages/common/atoms/index';
const LabeledInputAndSelect = ({
  className,
  height,
  width,
  margin,
  labelContent,
  placeholder,
  options,
}) => {
  return (
    <Container height={height} width={width} margin={margin} position="relative">
      <Label lineHeight="40px" fontSize="14px" padding="0px 0px 0px 10px">
        {labelContent}
      </Label>
      <Input styleType="order" placeholder={placeholder} />
      <StyledSelect className={className} options={options} />
    </Container>
  );
};

const StyledSelect = styled(Select)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export default LabeledInputAndSelect;
