import { Route, Routes } from 'react-router-dom';

import { App } from '@/App';
import {
  Home,
  MyPage,
  Wallet,
  OrderDetail,
  Login,
  SignUp,
  Price,
  OrderForm,
  OrderComplete,
  OrderList,
  UserUpDateForm,
  NotFound,
} from '@/pages';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/order/:orderId" element={<OrderDetail />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/price" element={<Price />} />
        <Route path="/washing" element={<OrderForm />} />
        <Route path="/washing/complete" element={<OrderComplete />} />
        <Route path="/history" element={<OrderList />} />
        <Route path="/updateUser" element={<UserUpDateForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
