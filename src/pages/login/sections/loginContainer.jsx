import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { StyledLogo, StyledLoginContainer }  from './styled';

import { Form, Span } from '@/pages/common/atoms';
import { LoginInput, LoginButton } from '@/pages/login/atoms';

const LoginContainer = () => {
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  const [loginAlert, setAlert] = useState(['','']);

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
      <Form>
        <LoginInput name='email' type='text'  onInputChange={handleLoginContainerChange} placeholder='이메일'  />
        {loginAlert[0] &&<Span color="red" margin="1rem">{loginAlert[0]}</Span> }
        <LoginInput name='password' type='password' onInputChange={handleLoginContainerChange} placeholder='비밀번호'  />
        {loginAlert[1] &&<Span color="red" margin="1rem">{loginAlert[1]}</Span> }
        <LoginButton>로그인</LoginButton>
      </Form>
      <LoginButton onBtnClick={handleSignUpBtnClick}>회원가입</LoginButton>
    </StyledLoginContainer>
    );
  }

export default LoginContainer