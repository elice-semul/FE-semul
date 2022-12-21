import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

import LabeledInput from '../atoms/labeledInput';
import LabeledInputAndSelect from '../atoms/labeledInputAndSelect';
import AutoComplete from './autoComplete';

import { Flex, Button } from '@/pages/common/atoms/index';

const LaundrySpec = ({
  options,
  register,
  registerName,
  quantityRegister,
  quantityRegisterName,
  onPlusBtnClick,
  inputValue,
  setInputValue,
}) => {
  return (
    <Flex position="relative" alignItems="flex-end">
      <AutoComplete
        labelContent="세탁물규격"
        width="61%"
        options={options}
        register={register}
        registerName={registerName}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <LabeledInput
        width="15%"
        placeholder="1"
        register={quantityRegister}
        registerName={quantityRegisterName}
        inputType="number"
      />
      <StyledBtnContainer>
        <Button
          type="button"
          onBtnClick={onPlusBtnClick}
          width="40px"
          height="40px"
          padding="0px 4px 4px 0px"
        >
          <AiOutlinePlus size="24" />
        </Button>
      </StyledBtnContainer>
    </Flex>
  );
};

const StyledBtnContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
export default LaundrySpec;
