/* eslint-disable */
import escapeStringRegexp from 'escape-string-regexp';
import { IoChevronBack, IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { StyledSearchInput, StyledPriceDiv, StyledPriceIconDiv } from './styled';

import { createFuzzyMatcher } from '@/pages/price/search/search';

import { Button, Flex } from '@/pages/common/atoms';

const PriceHeader = ({price , setPrice , orgPrice ,setCate , cate, setKeyword}) => {
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
          <StyledSearchInput onChange={(e) => {
              if(e.target.value) {
                  const result = price.filter(search => createFuzzyMatcher(e.target.value).test(search.name));
                  if (result && result.length) {
                      setKeyword(e.target.value)
                      setPrice(result);
                  }
              }else{
                  setKeyword('')
                  setCate(cate);
                  setPrice(orgPrice);
              }
            }}/>
        </StyledPriceDiv>
    </Flex>
  )
};

export default PriceHeader;