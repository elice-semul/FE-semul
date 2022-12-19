import axios from 'axios';
import { useEffect } from 'react';

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
  const testMockUser = async () => {
    const data1 = await axios.get('/mock/user/1');
    const data2 = await axios.get('/mock/user/2');
    const data3 = await axios.get('/mock/user/3'); //1, 2를 제외한 모든 값에 대치
    console.log('user1 : ', data1.data);
    console.log('user2 : ', data2.data);
    console.log('user3 : ', data3.data);
  };

  const testMockOrders = async () => {
    const data = await axios.get('/mock/orders');
    console.log('all orders : ', data.data);
  };

  const testMockOrdersId = async () => {
    const data0 = await axios.get('/mock/orders/100000');
    const data1 = await axios.get('/mock/orders/100001');
    const data2 = await axios.get('/mock/orders/100002');
    const data3 = await axios.get('/mock/orders/100003');
    const data4 = await axios.get('/mock/orders/100004');
    console.log('data0 connect : ', data0.data);
    console.log('data1 inspect : ', data1.data);
    console.log('data2 laundry : ', data2.data);
    console.log('data3 arrival : ', data3.data);
    console.log('data4 complete : ', data4.data);
  };

  useEffect(() => {
    testMockUser();
    testMockOrders();
    testMockOrdersId();
  }, []);

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
