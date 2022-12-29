import { useState } from 'react';

import {
  StyledLayout,
  StyledContainer,
  StyledContentContainer,
  StyledButtonContainer,
  StyledTitle,
} from './styled';

import { Button } from '@/pages/common/atoms';
import { theme } from '@/styles/theme';

const Modal = ({ text, successText, onShow, onConfirm, onSuccess, onCancel ,cancelYn}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  if(cancelYn === undefined){
    cancelYn = true;
  }
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

  return (
    <StyledLayout onClick={handleModalLayoutClick}>
      <StyledContainer>
        <StyledContentContainer onClick={handleModalContentContainerClick}>
          <StyledTitle>{isSuccess ? successText : text}</StyledTitle>
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
            {!isSuccess && cancelYn  && (
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
