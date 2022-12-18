import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { StyledHomeHeaderTextBlock, StyledHomeHeaderText } from './styled';

const HomeHeaderText = ({ address }) => {
  return (
    <StyledHomeHeaderTextBlock>
      {/* <Link> */}
      <StyledHomeHeaderText>{address || '로그인'}</StyledHomeHeaderText>
      <FaCaretDown className="caretDownIcon" />
      {/* </Link> */}
    </StyledHomeHeaderTextBlock>
  );
};

export default HomeHeaderText;
