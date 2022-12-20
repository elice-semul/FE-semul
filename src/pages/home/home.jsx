import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useMemo } from 'react';

import { HomeHeader, HomeBtnWrap, HomeLaundrtWidget, HomeBanner } from './sections/index';
import { StyledHomePageContauner } from './styled';

const Home = () => {
  // const testMockUser = async () => {
  //   const currentUser = await axios.get('/mock/user/1');
  //   const data1 = await axios.get('/mock/user/1');
  //   const data2 = await axios.get('/mock/user/2');
  //   const data3 = await axios.get('/mock/user/3'); //1, 2를 제외한 모든 값에 대치
  //   console.log('user1 : ', data1.data);
  //   console.log('user2 : ', data2.data);
  //   console.log('user3 : ', data3.data);
  // };

  // const testMockOrders = async () => {
  //   const orders = await axios.get('/mock/orders');
  //   const data = await axios.get('/mock/orders');
  //   console.log('all orders : ', data.data);
  // };

  // const testMockOrdersId = async () => {
  //   const data0 = await axios.get('/mock/orders/100000');
  //   const data1 = await axios.get('/mock/orders/100001');
  //   const data2 = await axios.get('/mock/orders/100002');
  //   const data3 = await axios.get('/mock/orders/100003');
  //   const data4 = await axios.get('/mock/orders/100004');
  //   console.log('data0 connect : ', data0.data);
  //   console.log('data1 inspect : ', data1.data);
  //   console.log('data2 laundry : ', data2.data);
  //   console.log('data3 arrival : ', data3.data);
  //   console.log('data4 complete : ', data4.data);
  // };

  // useEffect(() => {
  //   testMockUser();
  //   testMockOrders();
  //   testMockOrdersId();
  // }, []);
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
      <HomeHeader address={fullAddress} />
      <HomeBtnWrap />
      <HomeLaundrtWidget />
      <HomeBanner />
    </StyledHomePageContauner>
  );
};

export default Home;
