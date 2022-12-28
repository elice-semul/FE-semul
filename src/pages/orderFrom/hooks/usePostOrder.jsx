import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import * as API from './api';

const usePostOrder = () => {
  const navigate = useNavigate();
  const mutation = useMutation(['postOrder'], API.postOrderApi, {
    onSuccess: (data) => {
      navigate('complete', {
        state: { id: data.id },
      });
    },
    onError: (error) => {
      // eslint-disable-next-line no-alert
      alert(error);
    },
  });

  return mutation;
};

export default usePostOrder;
