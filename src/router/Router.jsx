import { Route, Routes } from 'react-router-dom';

import { App } from '@/App';
import { Home, MyPage, Wallet, OrderDetail } from '@/pages';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/order/:id" element={<OrderDetail />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/wallet" element={<Wallet />} />
      </Route>
    </Routes>
  );
}
