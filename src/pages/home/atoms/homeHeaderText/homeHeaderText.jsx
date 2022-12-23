import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { StyledHomeHeaderTextBlock, StyledHomeHeaderText } from './styled';

const HomeHeaderText = ({ address, queryStatus }) => {
  const navigate = useNavigate();
  const handleTextBlockClick = () => (address ? navigate('/') : navigate('/login'));
  return (
    <StyledHomeHeaderTextBlock onClick={handleTextBlockClick}>
      <StyledHomeHeaderText>
        {queryStatus === 'loading' ? '로딩중' : address || '로그인'}
      </StyledHomeHeaderText>
      <FaCaretDown className="caretDownIcon" />
    </StyledHomeHeaderTextBlock>
  );
};

export default HomeHeaderText;
