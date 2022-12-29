import styled from 'styled-components';

import { Button } from '@/pages/common/atoms/index';

const SubmitBtn = () => {
  return (
    <Button
      backGroundColor="#094067"
      color="#FFFFFF"
      width="100%"
      height="80px"
      radius="default"
      fontSize="36px"
      fontWeight="bold"
      type="submit"
    >
      신청하기
    </Button>
  );
};

const StyledButton = styled(Button)`
  font-size: 36px;
  font-weight: bold;
`;
export default SubmitBtn;
