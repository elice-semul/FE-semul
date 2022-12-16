import { Flex, Span } from '@/pages/common/atoms';

const mock = [
  {
    idle: 'IDLE',
    hover: 'HOVER',
    text: '홈',
  },
  {
    idle: 'IDLE',
    hover: 'HOVER',
    text: '내근처',
  },
  {
    idle: 'IDLE',
    hover: 'HOVER',
    text: '세탁신청',
  },
  {
    idle: 'IDLE',
    hover: 'HOVER',
    text: '이용내역',
  },
  {
    idle: 'IDLE',
    hover: 'HOVER',
    text: '마이페이지',
  },
];

const FooterTabs = () => {
  return mock.map(({ idle, hover, text }, index) => (
    <Flex
      key={index}
      width="7rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <div>{idle}</div>
      <div>{hover}</div>
      <Span
        display="block"
        margin="0.8rem 0 0"
        color="headline"
        fontSize="1.4rem"
        fontWeight="500"
        lineHeight="1.7rem"
      >
        {text}
      </Span>
    </Flex>
  ));
};

const Footer = () => {
  return (
    <Flex
      height="10rem"
      display="flex"
      pt="2.4rem"
      pl="2.2rem"
      pr="2.2rem"
      pb="0.8rem"
      shadow="0px -2px 6px rgba(197, 197, 197, 0.3)"
      radius="2.5rem 2.5rem 0 0"
      justifyContent="space-between"
    >
      <FooterTabs />
    </Flex>
  );
};

export default Footer;
