import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { StyledHomeHeaderTextBlock, StyledHomeHeaderText } from './styled';

import { AddressFormPortal } from '@/pages/common/pages';

const HomeHeaderText = ({ address, queryStatus, currentUser }) => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const navigate = useNavigate();
  const handleTextBlockClick = () => (address ? setIsModalShowing(true) : navigate('/login'));
  const handleConfirmClick = () => {};

  const handleCancelClick = () => {
    setIsModalShowing(false);
  };

  const handleSuccessClick = () => {
    setIsModalShowing(false);
  };
  return (
    <>
      <StyledHomeHeaderTextBlock onClick={handleTextBlockClick}>
        <StyledHomeHeaderText>
          {queryStatus === 'loading' ? '로딩중' : address || '로그인'}
        </StyledHomeHeaderText>
        <FaCaretDown className="caretDownIcon" />
      </StyledHomeHeaderTextBlock>
      {isModalShowing && (
        <AddressFormPortal
          text="주소 변경"
          successText="배송 주소를 변경하시겠습니까?"
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          onCancel={handleCancelClick}
          onSuccess={handleSuccessClick}
          currentUser={currentUser}
        />
      )}
    </>
  );
};

export default HomeHeaderText;
