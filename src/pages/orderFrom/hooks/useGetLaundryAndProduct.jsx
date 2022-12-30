import { useQueries } from '@tanstack/react-query';

import * as API from './api';

const useGetLaundryAndProduct = () => {
  const result = useQueries({
    queries: [
      { queryKey: ['product'], queryFn: API.getProductApi },
      { queryKey: ['laundry'], queryFn: API.getLaundryApi },
    ],
  });

  return { product: result[0], laundry: result[1] };
};

export default useGetLaundryAndProduct;
