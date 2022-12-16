import { Route, Routes } from 'react-router-dom';

import { Home, MyPage, Wallet } from '@/pages';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}
