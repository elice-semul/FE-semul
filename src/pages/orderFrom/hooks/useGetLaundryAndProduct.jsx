import { useQueries } from '@tanstack/react-query';

import * as API from './api';

const useGetLaundryAndProduct = () => {
  const result = useQueries({
    queries: [
      { queryKey: ['product'], queryFn: API.getProductApi, staleTime: Infinity, suspense: true },
      { queryKey: ['laundry'], queryFn: API.getLaundryApi, staleTime: Infinity, suspense: true },
    ],
  });

  return { product: result[0], laundry: result[1] };
};

export default useGetLaundryAndProduct;
