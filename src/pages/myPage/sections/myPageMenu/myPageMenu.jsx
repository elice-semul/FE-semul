import { useEffect, useState } from 'react';
import { FiUserX, FiUser, FiLogOut } from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import useMyPage from '@/hooks/useMyPage';
import { PortalModal } from '@/pages/common/pages';
import { Ul, Li } from '@/pages/myPage/atoms';
import { removeUserInfo } from '@/utils/removeUserInfo';

const mock = [
  { type: 'modified', icon: <FiUser size="3.2rem" />, text: '회원 정보' },
  { type: 'wallet', icon: <IoWalletOutline size="3.2rem" />, text: '지갑' },
  { type: 'logout', icon: <FiLogOut size="3.2rem" />, text: '로그아웃' },
  { type: 'withdraw', icon: <FiUserX size="3.2rem" />, text: '회원탈퇴' },
];

export const MENU_STATUS = {
  MODIFIED: 'modified',
  WALLET: 'wallet',
  LOGOUT: 'logout',
  WITHDRAW: 'withdraw',
};

const MyPageMenu = () => {
  const navigate = useNavigate();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [modalText, setModalText] = useState('');
  const [menuStatus, setMenuStatus] = useState(MENU_STATUS.MODIFIED);
  const { withDrawUser } = useMyPage();

  useEffect(() => {
    if (menuStatus === MENU_STATUS.WALLET) {
      navigate('/wallet');
    }
  });

  const handleModalMenuClick = (text) => {
    if (text === '회원 정보') {
      navigate('/updateUser');
    }
    setIsModalShowing(true);
    setModalText(text);
  };

  const handleConfirmClick = () => {
    if (menuStatus === MENU_STATUS.LOGOUT) {
      removeUserInfo(navigate);
    } else if (menuStatus === MENU_STATUS.WITHDRAW) {
      withDrawUser.mutate();
    }
  };

  const handleCancelClick = () => {
    setIsModalShowing(false);
  };

  const handleSuccessClick = () => {
    setIsModalShowing(false);
  };

  const mapedMock = mock.map(({ text, ...props }, index) => (
    <div key={index} onClick={() => handleModalMenuClick(text)}>
      <Li key={index} {...{ text }} {...props} onSetMenuStatus={setMenuStatus} />
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
