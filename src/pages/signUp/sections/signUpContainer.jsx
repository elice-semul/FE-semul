import SignUpInput from '../atoms/SignUpInput/signUpInput';
import { StyledSignUpButton, StyledSignUpDiv, StyledSignUpContainer, StyledSignUpTitle, StyledSignUpSubmit }  from './styled';

import { Form } from '@/pages/common/atoms'

const SignUpContainer = () => {

  return (
    <StyledSignUpContainer>
     <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <Form>
        <SignUpInput labelText='이름' htmlFor='name' id='name' type='text'/>
        <SignUpInput labelText='전화번호' htmlFor='phoneNumber' id='phoneNumber' type='number'/>
        <SignUpInput labelText='주소' htmlFor='address' id='address' type='text'/>
        <StyledSignUpDiv>
          <StyledSignUpButton>주소찾기</StyledSignUpButton>
          <SignUpInput labelText='상세주소' htmlFor='detailAddress' id='detailAddress' className='detailAddress' type='text'/>
        </StyledSignUpDiv>
        <SignUpInput labelText='이메일' htmlFor='email' id='email' type='email'/>
        <SignUpInput labelText='비밀번호' htmlFor='password' id='password' type='password'/>
        <SignUpInput labelText='비밀번호 확인' htmlFor='passwordCheck' id='passwordCheck' type='password'/>
        <StyledSignUpSubmit>가입하기</StyledSignUpSubmit>
      </Form>
    </StyledSignUpContainer>
    );
}

export default SignUpContainer;