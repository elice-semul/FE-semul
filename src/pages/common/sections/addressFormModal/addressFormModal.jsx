import { useState } from 'react';

import {
  StyledLayout,
  StyledContainer,
  StyledContentContainer,
  StyledButtonContainer,
  StyledTitle,
  StyledFormContainer,
  StyledInputBlock,
  StyledInputLabel,
  StyledInput,
  StyledAddressBtn,
} from './styled';

import { Button, ModalDaumApi } from '@/pages/common/atoms';
import { theme } from '@/styles/theme';

const Modal = ({ text, successText, onShow, onConfirm, onSuccess, onCancel, currentUser }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [address, setAddress] = useState(currentUser.address.roadAddr);
  const [detailAddress, setDetailAddress] = useState(currentUser.address.detailAddr);
  const [daumApi, setDaumApi] = useState(false);

  const handleModalLayoutClick = () => {
    onShow(false);
  };

  const handleModalContentContainerClick = (event) => {
    event.stopPropagation();
  };

  const handleSuccessButtonClick = (event) => {
    event.stopPropagation();
    onSuccess();
  };

  const handleConfirmButtonCLick = (event) => {
    event.stopPropagation();
    onConfirm();
    setIsSuccess(true);
  };

  const handleCancelButtonClick = (event) => {
    event.stopPropagation();
    onCancel();
  };
  const handleDetailAddressChange = (event) => {
    setDetailAddress(event.target.value);
  };

  return (
    <StyledLayout onClick={handleModalLayoutClick}>
      <StyledContainer>
        <StyledContentContainer onClick={handleModalContentContainerClick}>
          <StyledTitle>{isSuccess ? successText : text}</StyledTitle>
          <StyledFormContainer onSubmit={handleConfirmButtonCLick}>
            <StyledInputLabel htmlFor="address">주소</StyledInputLabel>
            <StyledInputBlock>
              <StyledInput type="text" id="address" readOnly="readonly" value={address} />
              <StyledAddressBtn
                type="button"
                onClick={() => {
                  setDaumApi(!daumApi);
                }}
              >
                주소찾기
              </StyledAddressBtn>
              {daumApi && (
                <div>
                  <ModalDaumApi setAddress={setAddress} setDaumApi={setDaumApi} />
                </div>
              )}
            </StyledInputBlock>

            <StyledInputLabel htmlFor="detailAddress">상세 주소</StyledInputLabel>
            <StyledInput
              type="text"
              id="detailAddress"
              value={detailAddress}
              onChange={handleDetailAddressChange}
            />
          </StyledFormContainer>
          <StyledButtonContainer>
            <Button
              width="8rem"
              height="4rem"
              onBtnClick={isSuccess ? handleSuccessButtonClick : handleConfirmButtonCLick}
              backGroundColor={theme.colors.primary}
              color="white"
              radius="10px"
            >
              확인
            </Button>
            {!isSuccess && (
              <Button
                width="8rem"
                height="4rem"
                onBtnClick={handleCancelButtonClick}
                backGroundColor={theme.colors.primary}
                color="white"
                radius="10px"
              >
                취소
              </Button>
            )}
          </StyledButtonContainer>
        </StyledContentContainer>
      </StyledContainer>
    </StyledLayout>
  );
};

export default Modal;
