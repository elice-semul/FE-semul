import { StyledContainer } from './styled';

import { Flex } from '@/pages/common/atoms';
import { FooterTabs } from '@/pages/common/sections';

const Footer = () => {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default Footer;
