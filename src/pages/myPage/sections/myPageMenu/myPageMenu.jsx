import { useState } from 'react';
import { FiUserX, FiUser, FiLogOut } from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';

import { PortalModal } from '@/pages/common/pages';
import { Ul, Li } from '@/pages/myPage/atoms';

const mock = [
  { type: 'modified', icon: <FiUser size="3.2rem" />, text: '회원 정보 수정' },
  { type: 'wallet', icon: <IoWalletOutline size="3.2rem" />, text: '지갑' },
  { type: 'logout', icon: <FiLogOut size="3.2rem" />, text: '로그아웃' },
  { type: 'withdrawal', icon: <FiUserX size="3.2rem" />, text: '회원탈퇴' },
];

const MyPageMenu = ({ onMenuClick }) => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleMenuClick = (text) => {
    setIsModalShowing(true);
    setModalText(text);
  };

  const handleConfirmClick = () => {};

  const handleCancelClick = () => {
    setIsModalShowing(false);
  };

  const handleSuccessClick = () => {
    setIsModalShowing(false);
  };

  const mapedMock = mock.map(({ text, ...props }, index) => (
    <div key={index} onClick={() => handleMenuClick(text)}>
      <Li key={index} {...{ text }} {...props} {...{ onMenuClick }} />
    </div>
  ));

  return (
    <Ul>
      {mapedMock}
      {isModalShowing && (
        <PortalModal
          text={`${modalText} 하시겠습니까?`}
          successText={`${modalText} 완료!`}
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          onCancel={handleCancelClick}
          onSuccess={handleSuccessClick}
        />
      )}
    </Ul>
  );
};

export default MyPageMenu;
