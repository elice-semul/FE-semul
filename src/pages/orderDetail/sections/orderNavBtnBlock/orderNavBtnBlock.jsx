import { useParams, useNavigate } from 'react-router-dom';

import { OrderNavBtn } from '../../atoms/index';
import { StyledOrderNavBtnContainer } from './styled';

const OrderNavBtnBlock = () => {
  const navigate = useNavigate();
  const orderNavBtnData = [
    { text: '세탁 중', isActive: true, uri: '/orders/current' },
    { text: '이용내역', isActive: false, uri: '/orders/complete' },
  ];
  const handleNavBtnClick = (uri) => {
    navigate(uri);
  };
  return (
    <StyledOrderNavBtnContainer>
      {orderNavBtnData.map(({ text, isActive, uri }) => {
        return (
          <OrderNavBtn key={text} isActive={isActive} onNavBtnClick={() => handleNavBtnClick(uri)}>
            {text}
          </OrderNavBtn>
        );
      })}
    </StyledOrderNavBtnContainer>
  );
};

export default OrderNavBtnBlock;
