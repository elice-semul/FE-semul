import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

import LabeledInputAndSelect from '../atoms/labeledInputAndSelect';

import { Flex, Button } from '@/pages/common/atoms/index';

const LaundrySpec = () => {
  return (
    <Flex position="relative" alignItems="flex-end">
      <StyledSelect labelContent="세탁물규격" width="53%" options={['와이셔츠', '코드', '신발']} />
      <StyledSelect width="23%" options={['1개', '2개', '3개']} />
      <StyledBtnContainer>
        <Button width="40px" height="40px" padding="0px 4px 4px 0px">
          <AiOutlineClose size="24" color="red" />
        </Button>
        <Button width="40px" height="40px" padding="0px 4px 4px 0px">
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

const StyledSelect = styled(LabeledInputAndSelect)`
  border: none;
  width: auto;
`;
export default LaundrySpec;
