import { useState, useEffect } from 'react';

import DaumApi from '../page/daumApi';
import { StyledSignUpButton, StyledSignUpDiv, StyledSignUpContainer, StyledSignUpTitle, StyledSignUpSubmit } from './styled';

import { Form } from '@/pages/common/atoms'
import UpdateInput from '@/pages/userUpdateform/atoms/updateInput/updateInput';


const UpDateFormContainer = ({ userState }) => {
  const [address, setAddress] = useState('')
  const [daumApi, setDaumApi]  = useState(false);
  const [readonly, setReadOnly]  = useState(true);

  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
    email: '',
    password:'',
    passwordCheck:''
  });

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
     <StyledSignUpTitle>회원정보</StyledSignUpTitle>
      <Form onSubmit={signUpSubmit}>
        <UpdateInput labelText='이름' readonly={readonly} htmlFor='name' id='name' values={values} value={userState.name}  setValues={setValues} type='text'/>
        <UpdateInput labelText='전화번호' readonly={readonly} htmlFor='phoneNumber' id='phoneNumber' values={values}  value={userState.phoneNumber}  setValues={setValues} type='number'/>
        <UpdateInput labelText='주소' readonly={readonly} htmlFor='address' id='address' values={values}  value={userState.address?.roadAddr} setValues={setValues}  type='text'/>
        <StyledSignUpDiv>
          <StyledSignUpButton type="button" value="주소찾기" onClick={() => setDaumApi(!daumApi)} />
          <UpdateInput labelText='상세주소'  readonly={readonly} htmlFor='detailAddress' values={values}  value={userState.address?.detailAddr} id='detailAddress' setValues={setValues}  className='detailAddress' type='text'/>
        </StyledSignUpDiv>
        <UpdateInput labelText='이메일'  readonly={readonly} htmlFor='email' id='email' values={values} value={userState.email} type='email' setValues={setValues} />
        <UpdateInput labelText='비밀번호'  readonly={readonly} htmlFor='password' id='password' values={values}  value={values.password} type='password' setValues={setValues} />
        <UpdateInput labelText='비밀번호 확인'  readonly={readonly} htmlFor='passwordCheck' id='passwordCheck' values={values}  value={values.passwordCheck}  type='password' setValues={setValues} />
        {!readonly && <StyledSignUpSubmit>수정완료</StyledSignUpSubmit>}
      </Form>
      {readonly && <StyledSignUpSubmit onClick={() => setReadOnly(!readonly)}>수정하기</StyledSignUpSubmit>}

      {daumApi && <div><DaumApi setAddress={setAddress} setDaumApi={setDaumApi} /></div>}
    </StyledSignUpContainer>
    );
}

export default UpDateFormContainer;