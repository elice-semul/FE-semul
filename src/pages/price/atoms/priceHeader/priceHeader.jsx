/* eslint-disable */
import escapeStringRegexp from 'escape-string-regexp';
import { IoChevronBack, IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import { StyledSearchInput, StyledPriceDiv, StyledPriceIconDiv } from './styled';

import { Button, Flex } from '@/pages/common/atoms';

const PriceHeader = ({price , setPrice , orgPrice}) => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(-1);
  }

  const  ch2pattern = (ch) => {
  const offset = 44032; 

  if (/[가-힣]/.test(ch)) {
    const chCode = ch.charCodeAt(0) - offset;
    if (chCode % 28 > 0) {
        return ch;
    }
    const begin = Math.floor(chCode / 28) * 28 + offset;
    const end = begin + 27;
    return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }

  if (/[ㄱ-ㅎ]/.test(ch)) {
    const con2syl = {
        'ㄱ': '가'.charCodeAt(0),
        'ㄲ': '까'.charCodeAt(0),
        'ㄴ': '나'.charCodeAt(0),
        'ㄷ': '다'.charCodeAt(0),
        'ㄸ': '따'.charCodeAt(0),
        'ㄹ': '라'.charCodeAt(0),
        'ㅁ': '마'.charCodeAt(0),
        'ㅂ': '바'.charCodeAt(0),
        'ㅃ': '빠'.charCodeAt(0),
        'ㅅ': '사'.charCodeAt(0),
    };
    const begin = con2syl[ch] || ( ( ch.charCodeAt(0) - 12613 ) * 588 + con2syl['ㅅ'] );
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }
  return escapeStringRegexp(ch);
  }
  const createFuzzyMatcher = (input) => {
    const pattern = input.split('').map(ch2pattern).join('.*?');
    return new RegExp(pattern);
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
                      setPrice(result);
                  }
              }else{
                  setPrice(orgPrice);
              }
            }}/>
        </StyledPriceDiv>
    </Flex>
  )
};

export default PriceHeader;