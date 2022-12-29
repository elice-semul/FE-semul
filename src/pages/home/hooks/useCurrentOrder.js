import { useQuery } from '@tanstack/react-query';

import { getCurrentOrdersApi } from './api';

const useCurrentOrder = () => {
  const currentOrderQuery = useQuery(['currentOrders'], getCurrentOrdersApi);
  return { currentOrderQuery };
};

export default useCurrentOrder;
