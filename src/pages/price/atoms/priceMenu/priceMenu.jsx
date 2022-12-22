import { useNavigate } from 'react-router-dom';

import { StyledPriceFlex } from './styled';

import {Button} from '@/pages/common/atoms';

const PriceMenu = ({orgPrice ,setPrice ,setCate}) => {
  const navigate = useNavigate();
  const menu = [
    'ALL',
    'CLOTHING',
    'LIVING',
    'BEDDING',
    'SHOES',
    'LEATHER',
    'REPAIR',
    'STORAGE'
  ];
  const backColor = [
    'yellow',
    'green',
    'red',
    'purple',
    'pink',
    'light',
    'skyblue',
    'snow'
  ]

  const handleBtnClick = (value) => {
    setCate(value);
    if(value === 'ALL' ){
      setPrice(orgPrice);
    }else{
      const result = orgPrice.filter(orgPrice => orgPrice.category === value);
      setPrice(result);
    }
  };

  const menuMock = menu.map((text, index) => (
    <Button 
      onBtnClick={(e) => handleBtnClick(text)}
      key={index}
      backGroundColor='#e1e1e1'
      height='60px'
      width='100px'
      fontSize='1.4rem'
    >{text}
    </Button>
  ));

  return (
    <StyledPriceFlex>
      {menuMock}
    </StyledPriceFlex>
  )
};

export default PriceMenu;
