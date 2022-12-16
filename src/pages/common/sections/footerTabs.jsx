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
  },
  {
    idle: <AiOutlineEnvironment size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillEnvironment size="4.4rem" color={theme.colors.headline} />,
    text: '내근처',
  },
  {
    idle: <AiFillPlusCircle size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillPlusCircle size="4.4rem" color={theme.colors.headline} />,
    text: '세탁신청',
  },
  {
    idle: <AiOutlineFileText size="4.4rem" color={theme.colors.headline} />,
    hover: <AiFillFileText size="4.4rem" color={theme.colors.headline} />,
    text: '이용내역',
  },
  {
    idle: <RiUserLine size="4.4rem" color={theme.colors.headline} />,
    hover: <RiUserFill size="4.4rem" color={theme.colors.headline} />,
    text: '마이페이지',
  },
];

const mapedMock = mock.map(({ idle, hover, text }, index) => (
  <FooterTab key={index} {...{ idle }} {...{ hover }} {...{ text }} />
));

const FooterTabs = () => {
  return mapedMock;
};

export default FooterTabs;
