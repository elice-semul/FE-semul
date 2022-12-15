import { Route, Routes } from 'react-router-dom';

import { Home } from '@/components/pages';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
