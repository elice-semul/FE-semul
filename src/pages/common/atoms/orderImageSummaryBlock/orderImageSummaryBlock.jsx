import { useNavigate } from 'react-router-dom';

import {
  StyledOrderImageSummaryContainer,
  StyledOrderImageSummaryTextContainer,
  StyledOrderImageSummaryText,
  StyledOrderImageSummaryPrice,
  StyledOrderSummaryImage,
} from './styled';

import { calculateEstimatedPrice } from '@/utils/calculateEstimatedPrice';

const OrderImageSummaryBlock = ({ orderId, products }) => {
  const navigate = useNavigate();
  const handleSummaryClick = (id) => {
    navigate(`/order/${id}`);
  };
  return (
    <StyledOrderImageSummaryContainer onClick={() => handleSummaryClick(orderId)}>
      <StyledOrderImageSummaryTextContainer>
        <StyledOrderImageSummaryText>
          {products[0].productName} 포함 총 {products.length}건
        </StyledOrderImageSummaryText>
        <StyledOrderImageSummaryPrice>
          예상 금액: {calculateEstimatedPrice(products)}원
        </StyledOrderImageSummaryPrice>
      </StyledOrderImageSummaryTextContainer>
      <StyledOrderSummaryImage src="https://semul.s3.ap-northeast-2.amazonaws.com/clothThumbnail-1.jpeg" />
    </StyledOrderImageSummaryContainer>
  );
};

export default OrderImageSummaryBlock;
