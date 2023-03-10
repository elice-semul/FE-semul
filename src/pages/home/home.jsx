import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import useCurrnetUser from './hooks/useCurrentUser';
import { HomeHeader, HomeBtnWrap, HomeLaundrtWidget, HomeBanner } from './sections/index';
import { StyledHomePageContainer } from './styled';

const Home = () => {
  const token = sessionStorage.getItem('Authorization');
  if (token) {
    const { currentUserQuery } = useCurrnetUser();

    const { status, data: currentUser, error } = currentUserQuery;
    if (status === 'error') {
      throw new Error(error);
    }
    const fullAddress = useMemo(() => {
      if (currentUser) {
        return currentUser.address.roadAddr + ' ' + currentUser.address.detailAddr;
      }
      return false;
    }, [currentUser]);
    return (
      <StyledHomePageContainer>
        <HomeHeader address={fullAddress} queryStatus={status} currentUser={currentUser} />
        <HomeBtnWrap token={token} />
        <HomeLaundrtWidget currentUser={currentUser} />
        <HomeBanner />
      </StyledHomePageContainer>
    );
  }
  return (
    <StyledHomePageContainer>
      <HomeHeader />
      <HomeBtnWrap />
      <HomeLaundrtWidget />
      <HomeBanner />
    </StyledHomePageContainer>
  );
};

export default Home;
