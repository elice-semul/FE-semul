/* eslint-disable */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SignUpInput from '../atoms/SignUpInput/signUpInput';
import DaumApi from '../page/daumApi';
import {
  StyledSignUpButton,
  StyledSignUpDiv,
  StyledSignUpContainer,
  StyledSignUpTitle,
  StyledSignUpSubmit,
} from './styled';

import { Form } from '@/pages/common/atoms';
import axios from 'axios';
import PortalModal from '../../common/pages/portalModal/portalModal';
const BASE_URL = import.meta.env.VITE_BASE;

const SignUpContainer = () => {
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const navigate = useNavigate();
  const [submitCheck, setSubmitCheck] = useState(false);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [address, setAddress] = useState('');
  const [daumApi, setDaumApi] = useState(false);

  useEffect(() => {
    setValues({
      ...values,
      address,
    });
  }, [address]);

  const signUpSubmit = (e) => {
    e.preventDefault();
    let check = false;
    // eslint-disable-next-line no-restricted-syntax
    for (const i in Object.values(values)) {
      if (Object.values(values)[i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }

    if (check) {
      const lastAddr = address.split(' ');
      const body = {
        name: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        address: {
          roadAddr: address,
          detailAddr: values.detailAddress,
          jibun: lastAddr[lastAddr.length - 1],
        },
      };

      axios.post(`${BASE_URL}/users/signup`, body).then((data) => {
        if (data.status === 201) {
          setSubmitCheck(true);
          setIsModalShowing(true);
        } else {
          alert('회원가입 실패');
        }
      });
    } else {
      setIsModalShowing(true);
    }
  };

  const handleConfirmClick = () => {
    setIsModalShowing(false);
    if (submitCheck) {
      navigate('/login');
    }
  };
  return (
    <StyledSignUpContainer>
      <StyledSignUpTitle>회원가입</StyledSignUpTitle>
      <Form onSubmit={signUpSubmit}>
        <SignUpInput
          labelText="이름"
          htmlFor="name"
          id="name"
          values={values}
          value={values.name}
          setValues={setValues}
          type="text"
        />
        <SignUpInput
          labelText="전화번호"
          htmlFor="phoneNumber"
          id="phoneNumber"
          values={values}
          value={values.phoneNumber}
          setValues={setValues}
          type="number"
        />
        <StyledSignUpDiv>
          <StyledSignUpButton type="button" value="주소찾기" onClick={() => setDaumApi(!daumApi)} />
          <SignUpInput
            labelText="주소"
            readonly="readonly"
            htmlFor="address"
            id="address"
            values={values}
            value={address}
            setValues={setValues}
            type="text"
          />
        </StyledSignUpDiv>
        <SignUpInput
          labelText="상세주소"
          htmlFor="detailAddress"
          values={values}
          value={values.detailAddress}
          id="detailAddress"
          setValues={setValues}
          className="detailAddress"
          type="text"
        />
        <SignUpInput
          labelText="이메일"
          htmlFor="email"
          id="email"
          values={values}
          value={values.email}
          type="text"
          setValues={setValues}
        />
        <SignUpInput
          labelText="비밀번호"
          htmlFor="password"
          id="password"
          values={values}
          value={values.password}
          type="password"
          setValues={setValues}
        />
        <SignUpInput
          labelText="비밀번호 확인"
          htmlFor="passwordCheck"
          id="passwordCheck"
          values={values}
          value={values.passwordCheck}
          type="password"
          setValues={setValues}
        />
        <StyledSignUpSubmit>가입하기</StyledSignUpSubmit>
      </Form>
      {daumApi && (
        <div>
          <DaumApi setAddress={setAddress} setDaumApi={setDaumApi} />
        </div>
      )}
      {isModalShowing && (
        <PortalModal
          text={submitCheck ? `회원가입이 완료되었습니다.` : '모든 항목을 올바르게 입력해 주세요.'}
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          cancelYn={false}
        />
      )}
    </StyledSignUpContainer>
  );
};

export default SignUpContainer;
