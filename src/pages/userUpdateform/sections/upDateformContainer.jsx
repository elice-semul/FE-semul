import { useState ,useEffect } from 'react';

import SignUpInput from '../atoms/SignUpInput/signUpInput';
import DaumApi from '../page/daumApi';
import { StyledSignUpButton, StyledSignUpDiv, StyledSignUpContainer, StyledSignUpTitle, StyledSignUpSubmit }  from './styled';

import { Form } from '@/pages/common/atoms'

const UpDateFormContainer = () => {
  const [values, setValues] = useState({
    name:'',
    phoneNumber: '',
    address: '',
    detailAddress: '',
    email: '',
    password:'',
    passwordCheck:''
  });


  const [address, setAddress] = useState('')
  const [daumApi, setDaumApi]  = useState(false);


  useEffect(() => {
    setValues({
      ...values,
      address,
    })
  },[address])


  const signUpSubmit = (e) => {

    e.preventDefault();
  }
  return (
    <StyledSignUpContainer>
     <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <Form onSubmit={signUpSubmit}>
        <SignUpInput labelText='이름' htmlFor='name' id='name' values={values} value={values.name}  setValues={setValues} type='text'/>
        <SignUpInput labelText='전화번호' htmlFor='phoneNumber' id='phoneNumber' values={values}  value={values.phoneNumber}  setValues={setValues} type='number'/>
        <SignUpInput labelText='주소' readonly='readonly' htmlFor='address' id='address' values={values}  value={address} setValues={setValues}  type='text'/>
        <StyledSignUpDiv>
          <StyledSignUpButton type="button" value="주소찾기" onClick={() => setDaumApi(!daumApi)} />
          <SignUpInput labelText='상세주소' htmlFor='detailAddress' values={values}  value={values.detailAddress} id='detailAddress' setValues={setValues}  className='detailAddress' type='text'/>
        </StyledSignUpDiv>
        <SignUpInput labelText='이메일' htmlFor='email' id='email' values={values} value={values.email} type='email' setValues={setValues} />
        <SignUpInput labelText='비밀번호' htmlFor='password' id='password' values={values}  value={values.password} type='password' setValues={setValues} />
        <SignUpInput labelText='비밀번호 확인' htmlFor='passwordCheck' id='passwordCheck' values={values}  value={values.passwordCheck}  type='password' setValues={setValues} />
        <StyledSignUpSubmit>가입하기</StyledSignUpSubmit>
      </Form>
      {daumApi && <div><DaumApi setAddress={setAddress} setDaumApi={setDaumApi} /></div>}
    </StyledSignUpContainer>
    );
}

export default UpDateFormContainer;