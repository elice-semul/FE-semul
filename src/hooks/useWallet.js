import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const getMoneyInWallet = async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASE}/wallets`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('Authorization')}`,
    },
  });
  return res.data;
};

const postChargeMoneyInWallet = async ({ money }) => {
  await axios.post(
    `${import.meta.env.VITE_BASE}/wallets/charge`,
    {
      plusMoney: money * 10000,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('Authorization')}`,
      },
    }
  );
};

const useWallet = () => {
  const queryClient = useQueryClient();

  const { data: walletData } = useQuery(['wallet'], getMoneyInWallet, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const chargeMoneyInWallet = useMutation(['charge'], postChargeMoneyInWallet, {
    onSuccess: () => queryClient.invalidateQueries(['wallet']),
  });

  return { walletData, chargeMoneyInWallet };
};

export default useWallet;
