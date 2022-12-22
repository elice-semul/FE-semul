/* eslint-disable */
import axios from 'axios';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import { StyledLogo, StyledLoginContainer, StyledLoginSpan }  from './styled';

import { Form } from '@/pages/common/atoms';
import { LoginInput, LoginButton } from '@/pages/login/atoms';

const LoginContainer = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const [loginAlert, setLoginAlert] = useState(['','']);

  const loginCheck = async () => {
    const newLoginAlert = [...loginAlert]
    if(!account.email){
      newLoginAlert[0] = '이메일을 입력해주세요'
    }
    if(!account.password){
      newLoginAlert[1] = '비밀번호를 입력해주세요'
    }
    setLoginAlert(newLoginAlert);
    if(account.password && account.email){
       await axios.post('/login', {
        email: account.email,
        password: account.password
      })
      .then((response) => {
        if(response.data.result === 'token'){
          sessionStorage.setItem('Authorization', response.data.result);
          navigate('/');
        }else{
          alert('로그인 정보를 확인해 주세요');
        }
      })
      .catch((error) => {
        console.log('login error!!:',error);
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
 
  return (
    <StyledLoginContainer>
      <StyledLogo>새물</StyledLogo>
      <Form onFormSubmit={loginCheck}>
        <LoginInput name='email' type='email'  onInputChange={handleLoginContainerChange} placeholder='이메일'  />
        <StyledLoginSpan>{account.email === '' && loginAlert[0]}</StyledLoginSpan>
        <LoginInput name='password' type='password' onInputChange={handleLoginContainerChange} placeholder='비밀번호'  />
        <StyledLoginSpan>{account.password === '' && loginAlert[1]}</StyledLoginSpan>
        <LoginButton>로그인</LoginButton>
      </Form>
      <LoginButton onBtnClick={handleSignUpBtnClick}>회원가입</LoginButton>
    </StyledLoginContainer>
    );
  }

export default LoginContainer
