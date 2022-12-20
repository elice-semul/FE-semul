import { useNavigate } from 'react-router-dom';

import { StyledPriceFlex } from './styled';

import {Button} from '@/pages/common/atoms';
import {theme} from '@/styles/theme';

const PriceMenu = ({setPrice}) => {
  const navigate = useNavigate();
  
  const menu = [
    'ALL',
    'CLOTHING',
    'LIVING',
    'BEDDING',
    'SHOES',
    'LEATHER'
  ];

  const handleBtnClick = (e) => {
    setPrice([{
      name : '와이셔츠',
      price: 12000, 
      category: 1,
    }]);
  };

  const mapedMock = menu.map((text, index) => (
    <Button 
      onBtnClick={(e) => handleBtnClick(text)}
      key={index} 
      backGroundColor={theme.colors.gray100} 
      height='60px'
      width='100px'
      fontSize='1.4rem'
    >{text}
    </Button>
  ));

  return (
    <StyledPriceFlex>
      {mapedMock}
    </StyledPriceFlex>
  )
};

export default PriceMenu;
