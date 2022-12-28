import { useQuery } from '@tanstack/react-query';

import * as API from './api';
const useGetCurrentUser = (setValue) => {
  const data = useQuery(['currentUser'], API.getCurrentUserApi, {
    onSuccess: (data) => {
      const address = `${data.address.roadAddr} ${data.address.detailAddr}`;
      setValue('address', address);
    },
  });
  const userData = data.data;
  return userData;
};

export default useGetCurrentUser;
