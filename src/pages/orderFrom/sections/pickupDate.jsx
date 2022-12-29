import { AiOutlineClockCircle } from 'react-icons/ai';
import styled from 'styled-components';

import LabeledInputAndBtn from '../atoms/labeledInputAndBtn';

import { Flex, Select } from '@/pages/common/atoms/index';

const PickupDate = ({ register, registerName, selectRegister, selectRegisterName }) => {
  return (
    <Flex alignItems="flex-end">
      <LabeledInputAndBtn
        width="68%"
        labelContent="수거일시"
        register={register}
        registerName={registerName}
        inputType="date"
      />
      <StyledSelect
        height="60px"
        width="32%"
        options={['직접방문', '사장님 수거']}
        register={selectRegister}
        registerName={selectRegisterName}
      />
    </Flex>
  );
};

const StyledSelect = styled(Select)`
  border: none;
  font-size: 20px;
  font-weight: bold;
`;

export default PickupDate;
