import { HomeTitle, CurrentLaundryBlock, EmptyLaundryBlock } from '../../atoms/index';
import { StyledHomeLaundryWidgetContainer } from './styled';
const HomeLaundrtWidget = ({ currentOrder }) => {
  const title = currentOrder ? '지금은 세탁 중 🧺' : '빨래 기다리는 중 👀';
  return (
    <StyledHomeLaundryWidgetContainer>
      <HomeTitle>{title}</HomeTitle>
      {currentOrder ? <CurrentLaundryBlock {...{ currentOrder }} /> : <EmptyLaundryBlock />}
    </StyledHomeLaundryWidgetContainer>
  );
};

export default HomeLaundrtWidget;
