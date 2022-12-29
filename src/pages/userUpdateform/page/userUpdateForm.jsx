/* eslint-disable */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UpDateFormContainer from '../sections/upDateformContainer';

import { Header } from '@/pages/common/sections';

const UserUpDateForm = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('Authorization');
  const [userState, setUserState] = useState('');

  useEffect(() => {
    if (!token) {
      alert('로그인후 이용해 주세요');
      navigate('/login');
    } else {
      axios
        .get('http://34.64.61.59:3000/users', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          setUserState(res.data);
        })
        .catch((error) => {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        });
    }
  }, []);
  return (
    <>
      <Header>회원정보</Header>
      <UpDateFormContainer userState={userState} />
    </>
  );
};

export default UserUpDateForm;
