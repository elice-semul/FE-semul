/* eslint-disable */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { StyledLogo, StyledLoginContainer, StyledLoginSpan } from './styled';

import { Form } from '@/pages/common/atoms';
import PortalModal from '@/pages/common/pages/portalModal/portalModal';
import { LoginInput, LoginButton } from '@/pages/login/atoms';
const BASE_URL  = import.meta.env.VITE_BASE
const LoginContainer = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [loginAlert, setLoginAlert] = useState(['', '']);

  const loginCheck = async () => {
    const newLoginAlert = [...loginAlert]
    if (!account.email) {
      newLoginAlert[0] = '이메일을 입력해주세요'
    }
    if (!account.password) {
      newLoginAlert[1] = '비밀번호를 입력해주세요'
    }
    setLoginAlert(newLoginAlert);
    if (account.password && account.email) {
      await axios.post(`${BASE_URL}/users/login`, {
        email: account.email,
        password: account.password,
      })
      .then((response) => {
        if (response.data.access_token) {
          sessionStorage.setItem('Authorization', response.data.access_token);
          navigate('/');
        } else {
          setIsModalShowing(true);
        }
      })
      .catch((error) => {
        setIsModalShowing(true);
      });
    }
  }

  const handleLoginContainerChange = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSignUpBtnClick = () => {
    navigate('/signup');
  }

  const handleConfirmClick = () => {
    setIsModalShowing(false);
  };

  return (
    <StyledLoginContainer>
      <StyledLogo>새물</StyledLogo>
      <Form onFormSubmit={loginCheck}>
        <LoginInput name='email' type='email' onInputChange={handleLoginContainerChange} placeholder='이메일' />
        <StyledLoginSpan>{account.email === '' && loginAlert[0]}</StyledLoginSpan>
        <LoginInput name='password' type='password' onInputChange={handleLoginContainerChange} placeholder='비밀번호' />
        <StyledLoginSpan>{account.password === '' && loginAlert[1]}</StyledLoginSpan>
        <LoginButton>로그인</LoginButton>
      </Form>
      <LoginButton onBtnClick={handleSignUpBtnClick}>회원가입</LoginButton>
      {isModalShowing && (
          <PortalModal
              text={`아이디 혹은 비밀번호를 확인해 주세요`}
              onShow={setIsModalShowing}
              onConfirm={handleConfirmClick}
              cancelYn={false}
          />
      )}
    </StyledLoginContainer>
  );
}

export default LoginContainer
