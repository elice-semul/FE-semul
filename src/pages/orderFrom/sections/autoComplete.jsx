import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styled from 'styled-components';

import { Container, Label } from '@/pages/common/atoms/index';

const AutoComplete = ({
  labelContent,
  width,
  options,
  register,
  registerName,
  inputValue,
  setInputValue,
  onItemBtnClick,
}) => {
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState([]);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);
  const _register = register(registerName);

  const showDropDownList = () => {
    if (inputValue === '') {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = options.filter((value) => {
        return value.name.includes(inputValue);
      });
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    const item = `${clickedItem.name} ${clickedItem.price}원`;
    onItemBtnClick(clickedItem);
    setInputValue(item);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event) => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (event.key === 'ArrowDown' && dropDownList.length - 1 > dropDownItemIndex) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === 'ArrowUp' && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === 'Enter' && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <Container width={width} position="relative">
      <Label lineHeight="40px" fontSize="14px" padding="0px 0px 0px 10px">
        {labelContent}
      </Label>
      <StyledInput
        type="text"
        value={inputValue}
        onKeyUp={handleDropDownKey}
        {..._register}
        onChange={(e) => {
          _register.onChange(e);
          changeInputValue(e);
        }}
      />
      <DeleteButton onClick={() => setInputValue('')}>
        <AiOutlineClose size={14} />
      </DeleteButton>
      {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && <DropDownItem>해당하는 단어가 없습니다</DropDownItem>}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={dropDownItemIndex === dropDownIndex ? 'selected' : ''}
              >
                {dropDownItem.name} {dropDownItem.price}원
              </DropDownItem>
            );
          })}
        </DropDownBox>
      )}
    </Container>
  );
};

const StyledInput = styled.input`
  background-color: #f5f5f5;
  width: 100%;
  height: 60px;
  border: 0px;
  font-size: 12px;
  padding: 23px 16px;
  border-radius: 10px;
`;

const DeleteButton = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 23%;
  right: 10px;
`;

const DropDownBox = styled.ul`
  position: absolute;
  width: 100%;
  display: block;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  list-style-type: none;
  z-index: 3;
`;

const DropDownItem = styled.li`
  padding: 10px 16px;
  font-size: 14px;
  &.selected {
    background-color: lightgray;
  }
`;

export default AutoComplete;
