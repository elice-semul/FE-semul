import { IoChevronBack, IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { StyledSearchInput, StyledPriceDiv, StyledPriceIconDiv } from './styled';

import { Button, Flex } from '@/pages/common/atoms'

const PriceHeader = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(-1);
  }
  return (
    <Flex alignItems='center'>
        <Button margin='0' padding='1.2rem' border='none' onBtnClick={handleBtnClick}>
          <IoChevronBack fontSize='2rem'/>
        </Button>
        <StyledPriceDiv>
          <StyledPriceIconDiv>
           <IoSearch size={15}/>
          </StyledPriceIconDiv>
          <StyledSearchInput/>
        </StyledPriceDiv>
    </Flex>
  )
};

export default PriceHeader;