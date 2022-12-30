import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { removeUserInfo } from '@/utils/removeUserInfo';

const deleteUserWithDraw = async () => {
  await axios.delete(`${import.meta.env.VITE_BASE}/users`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('Authorization')}`,
    },
  });
};

const useMyPage = () => {
  const navigate = useNavigate();
  const withDrawUser = useMutation(['withDraw'], deleteUserWithDraw, {
    onSuccess: () => removeUserInfo(navigate),
  });

  return { withDrawUser };
};

export default useMyPage;
