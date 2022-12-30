import { HomeHeaderText, HomeHeaderBtnBlock } from '../../atoms';
import { StyledHomeHeaderContainer } from './styled';

const HomeHeader = (props) => {
  return (
    <StyledHomeHeaderContainer>
      <HomeHeaderText {...props} />
      <HomeHeaderBtnBlock />
    </StyledHomeHeaderContainer>
  );
};

export default HomeHeader;
