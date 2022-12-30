import { useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import styled from 'styled-components';

import LabeledInput from '../atoms/labeledInput';
import AutoComplete from './autoComplete';

import { Flex, Button } from '@/pages/common/atoms/index';

const LaundrySpec = ({
  options,
  register,
  registerName,
  quantityRegister,
  quantityRegisterName,
  onLaundryAddBtnClick,
  inputValue,
  setInputValue,
}) => {
  const [itemObj, setItemObj] = useState({});

  const handleItemBtnClick = (obj) => {
    setItemObj(obj);
  };
  const handleAddBtnClick = () => {
    onLaundryAddBtnClick(itemObj);
  };

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
        onItemBtnClick={handleItemBtnClick}
      />
      <LabeledInput
        width="15%"
        register={quantityRegister}
        registerName={quantityRegisterName}
        inputType="number"
        defaultValue={1}
        min={1}
      />
      <StyledBtnContainer>
        <Button
          type="button"
          onBtnClick={handleAddBtnClick}
          width="40px"
          height="40px"
          padding="0px 4px 4px 0px"
        >
          <AiOutlineCheck size="24" />
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
