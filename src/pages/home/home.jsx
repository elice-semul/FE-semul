import { HomeHeader, HomeBtnWrap, HomeLaundrtWidget, HomeBanner } from './sections/index';
import { StyledHomePageContauner } from './styled';

const currentOrder = {
  date: '2022. 12. 13. 화요일',
  prevCompleted: true,
  prevText: '신청 완료',
  nextCompleted: false,
  nextText: '확인 중',
};

const Home = () => {
  return (
    <StyledHomePageContauner>
      <HomeHeader address="서울특별시 영등포구 0000 000아파트 000호 0000호" />
      <HomeBtnWrap />
      <HomeLaundrtWidget currentOrder={currentOrder} />
      <HomeBanner />
    </StyledHomePageContauner>
  );
};

export default Home;
