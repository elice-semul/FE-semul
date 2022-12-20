import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { StyledHomeHeaderTextBlock, StyledHomeHeaderText } from './styled';

const HomeHeaderText = ({ address }) => {
  const navigate = useNavigate();
  const headerText = address || '로그인';
  const handleTextBlockClick = () => (address ? navigate('/') : navigate('/login'));
  return (
    <StyledHomeHeaderTextBlock onClick={handleTextBlockClick}>
      <StyledHomeHeaderText>{address || '로그인'}</StyledHomeHeaderText>
      <FaCaretDown className="caretDownIcon" />
    </StyledHomeHeaderTextBlock>
  );
};

export default HomeHeaderText;
