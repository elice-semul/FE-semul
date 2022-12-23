import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';

import { HomeHeader, HomeBtnWrap, HomeLaundrtWidget, HomeBanner } from './sections/index';
import { StyledHomePageContauner } from './styled';

const Home = () => {
  const {
    status,
    data: currentUser,
    error,
  } = useQuery(['currentUser'], async () => {
    const { data } = await axios.get('/mock/user/1');
    return data;
  });
  const fullAddress = useMemo(() => {
    if (currentUser) {
      return currentUser.address.roadAddr + ' ' + currentUser.address.detailAddr;
    }
    return false;
  }, [currentUser]);
  return (
    <StyledHomePageContauner>
      <HomeHeader address={fullAddress} queryStatus={status} />
      <HomeBtnWrap />
      <HomeLaundrtWidget />
      <HomeBanner />
    </StyledHomePageContauner>
  );
};

export default Home;
