import { useState } from 'react';

import { StyledHandleBtnBlock, StyledCancleBtn, StyledUpdateBtn } from './styled';

import { PortalModal, MemoUpdateFormPortal } from '@/pages/common/pages';
import useDetailOrder from '@/pages/orderDetail/hooks/useDetailOrder';

const ConnectStatusBtnBlock = ({ order }) => {
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [isCancelModal, setIsCancelModal] = useState(false);
  const { cancelOrderMutate } = useDetailOrder();

  const handleMemoUpdate = () => {
    setIsUpdateModal(true);
  };
  const handleOrderCancel = () => {
    setIsCancelModal(true);
  };
  const handleCancelConfirmClick = () => {
    cancelOrderMutate.mutate();
  };

  const handleCancelClick = () => {
    setIsUpdateModal(false);
    setIsCancelModal(false);
  };

  const handleSuccessClick = () => {
    setIsUpdateModal(false);
    setIsCancelModal(false);
  };
  return (
    <>
      <StyledHandleBtnBlock>
        <StyledUpdateBtn onClick={handleMemoUpdate}>메모 수정</StyledUpdateBtn>
        <StyledCancleBtn onClick={handleOrderCancel}>주문 취소</StyledCancleBtn>
      </StyledHandleBtnBlock>
      {isUpdateModal && (
        <MemoUpdateFormPortal
          text="유의사항을 수정 하시겠습니까?"
          successText="유의사항 수정 완료"
          onShow={setIsUpdateModal}
          onCancel={handleCancelClick}
          onSuccess={handleSuccessClick}
          order={order}
        />
      )}
      {isCancelModal && (
        <PortalModal
          text="주문을 취소 하시겠습니까?"
          successText="주문 취소 완료"
          onShow={setIsCancelModal}
          onConfirm={handleCancelConfirmClick}
          onCancel={handleCancelClick}
          onSuccess={handleSuccessClick}
          order={order}
        />
      )}
    </>
  );
};

export default ConnectStatusBtnBlock;
