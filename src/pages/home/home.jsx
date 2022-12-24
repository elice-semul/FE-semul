import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { getCurrentUserApi } from './hooks/api';
import { HomeHeader, HomeBtnWrap, HomeLaundrtWidget, HomeBanner } from './sections/index';
import { StyledHomePageContauner } from './styled';

const Home = () => {
  const token = sessionStorage.getItem('Authorization');
  if (token) {
    const { status, data: currentUser, error } = useQuery(['currentUser'], getCurrentUserApi);
    const fullAddress = useMemo(() => {
      if (currentUser) {
        return currentUser.address.roadAddr + ' ' + currentUser.address.detailAddr;
      }
      return false;
    }, [currentUser]);
    return (
      <StyledHomePageContauner>
        <HomeHeader address={fullAddress} queryStatus={status} currentUser={currentUser} />
        <HomeBtnWrap token={token} />
        <HomeLaundrtWidget currentUser={currentUser} />
        <HomeBanner />
      </StyledHomePageContauner>
    );
  }
  return (
    <StyledHomePageContauner>
      <HomeHeader />
      <HomeBtnWrap />
      <HomeLaundrtWidget />
      <HomeBanner />
    </StyledHomePageContauner>
  );
};

export default Home;
