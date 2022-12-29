import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';

import { getCurrentUserApi, updateUserAddressApi } from './api';

const useCurrnetUser = () => {
  const queryClient = useQueryClient();
  const currentUserQuery = useQuery(['currentUser'], getCurrentUserApi);
  const currentUserMutate = useMutation(['updateAddress'], updateUserAddressApi, {
    onMutate: async (updateAddress) => {
      const prevUser = queryClient.getQueryData(['currentUser']);
      await queryClient.cancelQueries(['currentUser']);
      queryClient.setQueryData(['currentUser'], () => {
        return updateAddress;
      });
      return () => queryClient.setQueryData(['currentUser'], prevUser);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['currentUser']);
      queryClient.invalidateQueries(['currentOrders']);
    },
    onError: (err, values, rollback) => {
      if (rollback) {
        rollback();
      }
    },
  });

  return { currentUserQuery, currentUserMutate };
};

export default useCurrnetUser;
