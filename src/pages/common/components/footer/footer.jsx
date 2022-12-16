import { StyledContainer } from './styled';

import { Flex } from '@/pages/common/atoms';
import { FooterTabs } from '@/pages/common/sections';

const Footer = () => {
  return (
    <StyledContainer>
      <Flex
        height="10rem"
        display="flex"
        padding="2.4rem 2.2rem 0.8rem"
        shadow="0px -2px 6px rgba(197, 197, 197, 0.3)"
        radius="2.5rem 2.5rem 0 0"
        justifyContent="space-between"
      >
        <FooterTabs />
      </Flex>
    </StyledContainer>
  );
};

export default Footer;
