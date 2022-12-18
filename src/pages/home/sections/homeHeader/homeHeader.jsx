import { HomeHeaderText, HomeHeaderBtnBlock } from '../../atoms';
import { StyledHomeHeaderContainer } from './styled';

const HomeHeader = ({ address }) => {
  return (
    <StyledHomeHeaderContainer>
      <HomeHeaderText {...{ address }} />
      <HomeHeaderBtnBlock />
    </StyledHomeHeaderContainer>
  );
};

export default HomeHeader;
