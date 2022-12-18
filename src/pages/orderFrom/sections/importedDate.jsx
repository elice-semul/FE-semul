import styled from 'styled-components';

import LabeledInputAndBtn from '../atoms/labeledInputAndBtn';

import { Container, Flex, Select } from '@/pages/common/atoms/index';
const ImportedDate = () => {
  return (
    <Flex alignItems="flex-end">
      <LabeledInputAndBtn width="68%" labelContent="수거일시" />
      <StyledSelect height="60px" width="32%" options={['직접방문', '사장님 수거']} />
    </Flex>
  );
};

export default ImportedDate;

const StyledSelect = styled(Select)`
  border: none;
  font-size: 20px;
  font-weight: bold;
`;
