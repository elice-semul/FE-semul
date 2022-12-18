import { Link } from 'react-router-dom';

import {
  StyledOrderImageSummaryContainer,
  StyledOrderImageSummaryTextContainer,
  StyledOrderImageSummaryText,
  StyledOrderImageSummaryPrice,
  StyledOrderSummaryImage,
} from './styled';

const OrderImageSummaryBlock = () => {
  return (
    // <Link to="/">
    <StyledOrderImageSummaryContainer>
      <StyledOrderImageSummaryTextContainer>
        <StyledOrderImageSummaryText>일반 패딩 외 총 5건</StyledOrderImageSummaryText>
        <StyledOrderImageSummaryPrice>예상 금액: 30,000원</StyledOrderImageSummaryPrice>
      </StyledOrderImageSummaryTextContainer>
      <StyledOrderSummaryImage src="src/assets/images/clothThumbnail-1.jpeg" />
    </StyledOrderImageSummaryContainer>
    // </Link>
  );
};

export default OrderImageSummaryBlock;
