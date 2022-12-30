import styled from 'styled-components';

import { Flex } from '@/pages/common/atoms/index';

const Toggle = ({ isCurrent, onToggleBtnClick }) => {
  //토글에 따라 스타일이 바뀌게 구현해야함.

  const handleCruuenBtnClick = () => {
    onToggleBtnClick('세탁중');
  };
  const handleCompleteBtnClick = () => {
    onToggleBtnClick('이용내역');
  };

  if (isCurrent === '세탁중') {
    return (
      <Flex gap="10px" margin="30px 10px">
        <StyledNormalButton onClick={handleCompleteBtnClick}>이용내역</StyledNormalButton>
        <StyledToggleButton onClick={handleCruuenBtnClick}>세탁중</StyledToggleButton>
      </Flex>
    );
  }
  return (
    <Flex gap="10px" margin="30px 10px">
      <StyledToggleButton onClick={handleCompleteBtnClick}>이용내역</StyledToggleButton>
      <StyledNormalButton onClick={handleCruuenBtnClick}>세탁중</StyledNormalButton>
    </Flex>
  );
};

const StyledNormalButton = styled.button`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
  background-color: transparent;
  border: none;
`;
const StyledToggleButton = styled.button`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  background-color: transparent;
  border: none;
`;

export default Toggle;
