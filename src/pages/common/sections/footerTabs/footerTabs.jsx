import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineEnvironment,
  AiFillEnvironment,
  AiFillPlusCircle,
  AiOutlineFileText,
  AiFillFileText,
} from 'react-icons/ai';
import { RiUserLine, RiUserFill } from 'react-icons/ri';

import { FooterTab } from '@/pages/common/atoms';
import { theme } from '@/styles/theme';

const mock = [
  {
    idle: <AiOutlineHome size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillHome size="4.4rem" color={theme.colors.headline} />,
    text: '홈',
    path: '/',
  },
  {
    idle: <AiOutlineEnvironment size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillEnvironment size="4.4rem" color={theme.colors.headline} />,
    text: '내근처',
    path: '/near',
  },
  {
    idle: <AiFillPlusCircle size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillPlusCircle size="4.4rem" color={theme.colors.headline} />,
    text: '세탁신청',
    path: '/washing',
  },
  {
    idle: <AiOutlineFileText size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillFileText size="4.4rem" color={theme.colors.headline} />,
    text: '이용내역',
    path: '/history',
  },
  {
    idle: <RiUserLine size="4.4rem" color={theme.colors.headline} />,
    hover: <RiUserFill size="4.4rem" color={theme.colors.headline} />,
    text: '마이페이지',
    path: '/myPage',
  },
];

const mapedMock = mock.map(({ ...props }, index) => <FooterTab key={index} {...props} />);

const FooterTabs = () => {
  return mapedMock;
};

export default FooterTabs;
