import * as S from './laundrySelcet/style';

import { Container, Label } from '@/pages/common/atoms/index';

const LabeledInputAndSelect = ({ labelContent, options, register, registerName }) => {
  return (
    <Container>
      <Label lineHeight="40px" fontSize="14px" padding="0px 0px 0px 10px">
        {labelContent}
      </Label>
      <S.StyledSelect {...register(registerName)}>
        {options.map((value) => {
          return (
            <S.StyledOption key={value.id} key-data={value.id}>
              {value.name}
            </S.StyledOption>
          );
        })}
      </S.StyledSelect>
    </Container>
  );
};

export default LabeledInputAndSelect;
