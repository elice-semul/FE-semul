import { useQuery } from '@tanstack/react-query';

import * as API from './api';
const useGetCurrentUser = () => {
  const data = useQuery(['currentUser'], API.getCurrentUserApi);
  return data;
};

export default useGetCurrentUser;
