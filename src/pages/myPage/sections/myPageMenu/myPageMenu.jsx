import { FiUserX, FiUser, FiLogOut } from 'react-icons/fi';
import { IoWalletOutline } from 'react-icons/io5';

import { Ul, Li } from '@/pages/myPage/atoms';

const mock = [
  { type: 'modified', icon: <FiUser size="3.2rem" />, text: '회원 정보 수정' },
  { type: 'wallet', icon: <IoWalletOutline size="3.2rem" />, text: '지갑' },
  { type: 'logout', icon: <FiLogOut size="3.2rem" />, text: '로그아웃' },
  { type: 'withdrawal', icon: <FiUserX size="3.2rem" />, text: '회원탈퇴' },
];

const MyPageMenu = ({ onMenuClick }) => {
  const mapedMock = mock.map(({ ...props }, index) => (
    <Li key={index} {...props} {...{ onMenuClick }} />
  ));

  return <Ul>{mapedMock}</Ul>;
};

export default MyPageMenu;
