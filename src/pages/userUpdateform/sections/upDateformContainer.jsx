/* eslint-disable */

import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PortalModal from '../../common/pages/portalModal/portalModal';
import {
  StyledSignUpButton,
  StyledSignUpDiv,
  StyledSignUpContainer,
  StyledSignUpTitle,
  StyledSignUpSubmit,
} from './styled';

import { Form } from '@/pages/common/atoms';
import DaumApi from '@/pages/signup/page/daumApi';
import UpdateInput from '@/pages/userUpdateform/atoms/updateInput/updateInput';
import SignUpSpan from '@/pages/signUp/atoms/signUpSpan/signUpSpan';
import { theme } from '@/styles/theme';

const BASE_URL = import.meta.env.VITE_BASE;

const UpDateFormContainer = ({ userState }) => {
  const navigate = useNavigate();
  const [readonly, setReadOnly] = useState(true);
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [values, setValues] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    detailAddress: '',
    email: '',
  });
  const [daumApi, setDaumApi] = useState(false);
  const [updateCheck, setUpdateCheck] = useState(false);

  const handleConfirmClick = () => {
    setIsModalShowing(false);
    if (updateCheck) {
      navigate('/myPage');
    }
  };

  const setValue = () => {
    setValues({
      ...values,
      email: userState.email,
      name: userState.name,
      address: userState.address?.roadAddr,
      phoneNumber: userState.phoneNumber,
      detailAddress: userState.address?.detailAddr,
    });
    setUpdateCheck(true);
  };

  const updateSubmit = async (e) => {
    e.preventDefault();
    let check = false;

    // eslint-disable-next-line no-restricted-syntax
    for (const i in Object.values(values)) {
      if (Object.values(values)[i] && password !== 'fail') {
        check = true;
      } else {
        check = false;
        break;
      }
    }

    if (check) {
      const lastAddr = values.address.split(' ');
      const token = sessionStorage.getItem('Authorization');
      if (password && password !== 'fail') {
        await axios.put(
          `${BASE_URL}/users/password`,
          {
            password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
      await axios
        .put(
          `${BASE_URL}/users`,
          {
            name: values.name,
            address: {
              roadAddr: !address ? values.address : address,
              detailAddr: values.detailAddress,
              jibun: lastAddr[lastAddr.length - 1],
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          if (data.status === 200) {
            setUpdateCheck(true);
            setIsModalShowing(true);
          } else {
            alert('?????? ??????');
          }
        });
    } else {
      setUpdateCheck(false);
      setIsModalShowing(true);
    }
  };

  return (
    <StyledSignUpContainer>
      <StyledSignUpTitle>{!updateCheck ? '?????? ??????' : '?????? ?????? ??????'}</StyledSignUpTitle>
      {
        <SignUpSpan
          color={theme.colors.primary}
          text={updateCheck && '????????? ????????? ???????????? ?????????'}
        ></SignUpSpan>
      }
      <Form onSubmit={updateSubmit}>
        <UpdateInput
          labelText="??????"
          readonly={readonly}
          htmlFor="name"
          id="name"
          values={values}
          value={userState.name}
          setValues={setValues}
          type="text"
        />
        <UpdateInput
          labelText="????????????"
          readonly={true}
          htmlFor="phoneNumber"
          id="phoneNumber"
          values={values}
          value={userState.phoneNumber}
          setValues={setValues}
          type="number"
        />
        <StyledSignUpDiv>
          {!readonly && (
            <StyledSignUpButton
              type="button"
              value="????????????"
              onClick={() => setDaumApi(!daumApi)}
            />
          )}
          <UpdateInput
            labelText="??????"
            readonly={readonly}
            htmlFor="address"
            id="address"
            values={values}
            value={address || userState.address?.roadAddr}
            setValues={setValues}
            type="text"
          />
        </StyledSignUpDiv>
        <UpdateInput
          labelText="????????????"
          readonly={readonly}
          htmlFor="detailAddress"
          values={values}
          value={userState.address?.detailAddr}
          id="detailAddress"
          setValues={setValues}
          className="detailAddress"
          type="text"
        />
        <UpdateInput
          labelText="?????????"
          readonly={true}
          htmlFor="email"
          id="email"
          values={values}
          value={userState.email}
          type="email"
          setValues={setValues}
        />
        {updateCheck && (
          <UpdateInput
            labelText="??? ????????????"
            readonly={readonly}
            htmlFor="password"
            id="password"
            values={values}
            value={values.password}
            type="password"
            setValues={setValues}
            setPassword={setPassword}
          />
        )}
        {!readonly && <StyledSignUpSubmit>????????????</StyledSignUpSubmit>}
      </Form>
      {readonly && (
        <StyledSignUpSubmit
          onClick={() => {
            setValue();
            setReadOnly(!readonly);
          }}
        >
          ????????????
        </StyledSignUpSubmit>
      )}

      {daumApi && (
        <div>
          <DaumApi setAddress={setAddress} setDaumApi={setDaumApi} />
        </div>
      )}
      {isModalShowing && (
        <PortalModal
          text={updateCheck ? `????????? ?????????????????????.` : '????????? ??????????????? ???????????????'}
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          cancelYn={false}
        />
      )}
    </StyledSignUpContainer>
  );
};

export default UpDateFormContainer;
