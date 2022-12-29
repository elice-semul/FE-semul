import { useState } from 'react';

import {
  StyledLayout,
  StyledContainer,
  StyledContentContainer,
  StyledButtonContainer,
  StyledTitle,
  StyledFormContainer,
  StyledInputLabel,
  StyledInput,
} from './styled';

import { Button } from '@/pages/common/atoms';
import useDetailOrder from '@/pages/orderDetail/hooks/useDetailOrder';
import { theme } from '@/styles/theme';

const Modal = ({ text, successText, onShow, onSuccess, onCancel, order }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [notice, setNotice] = useState(order.notice);
  const { updateOrderNoticeMutate } = useDetailOrder();
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
    updateOrderNoticeMutate.mutate({ notice });
    setIsSuccess(true);
  };

  const handleCancelButtonClick = (event) => {
    event.stopPropagation();
    onCancel();
  };
  const handleNoticeChange = (event) => {
    setNotice(event.target.value);
  };

  return (
    <StyledLayout onClick={handleModalLayoutClick}>
      <StyledContainer>
        <StyledContentContainer onClick={handleModalContentContainerClick}>
          <StyledTitle>{isSuccess ? successText : text}</StyledTitle>
          <StyledFormContainer onSubmit={handleConfirmButtonCLick}>
            <StyledInputLabel htmlFor="notice">유의 사항</StyledInputLabel>
            <StyledInput type="text" id="notice" value={notice} onChange={handleNoticeChange} />
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
