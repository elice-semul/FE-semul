import {
  StyledOrderReceiptContainer,
  StyledTextBlock,
  StyledReceiptText,
  StyledReceiptStrongText,
  StyledReceiptdescription,
} from './styled';

import { calculateEstimatedPrice } from '@/utils/calculateEstimatedPrice';
import { dateFormatForOrderDetail } from '@/utils/dateFormating';
const OrderReceipt = ({ order }) => {
  return (
    <>
      <StyledOrderReceiptContainer>
        <StyledTextBlock>
          <StyledReceiptText>결제 금액</StyledReceiptText>
          <StyledReceiptStrongText>
            {calculateEstimatedPrice(order.orderProducts)}원
          </StyledReceiptStrongText>
        </StyledTextBlock>
        <StyledTextBlock>
          <StyledReceiptText>주문 일시</StyledReceiptText>
          <StyledReceiptText>{dateFormatForOrderDetail(order.createdAt)}</StyledReceiptText>
        </StyledTextBlock>
      </StyledOrderReceiptContainer>
      <StyledOrderReceiptContainer>
        <StyledTextBlock>
          <StyledReceiptdescription>배송 주소</StyledReceiptdescription>
          <StyledReceiptdescription style={{ textAlign: 'right' }}>
            {order.address.roadAddr}
            <br />
            {order.address.detailAddr}
          </StyledReceiptdescription>
        </StyledTextBlock>
        {order.wishLaundryDateTime !== null && (
          <StyledTextBlock>
            <StyledReceiptdescription>희망 세탁일</StyledReceiptdescription>
            <StyledReceiptdescription>
              {dateFormatForOrderDetail(order.wishLaundryDateTime)}
            </StyledReceiptdescription>
          </StyledTextBlock>
        )}
        <StyledReceiptdescription>유의사항</StyledReceiptdescription>
        <StyledReceiptdescription>
          신발은 한 켤레가 맞아요.. 빨리 배송해주세요.. 다우니 많이 써주세요.. :)
        </StyledReceiptdescription>
      </StyledOrderReceiptContainer>
    </>
  );
};

export default OrderReceipt;
