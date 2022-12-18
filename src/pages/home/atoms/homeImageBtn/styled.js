import styled from 'styled-components';

export const StyledHomeImageBtnContainer = styled.button`
  width: 48vw;
  height: 200px;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray200};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const StyledHomeBtnImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

export const StyledHomeImageBtnTextContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-flow: column nowrap;
  padding: 40px 33px;
  justify-content: space-between;
`;

export const StyledHomeImageBtnTitle = styled.h2`
  font-size: 25px;
  font-weight: 700;
  line-height: 35px;
  text-align: left;
`;

export const StyledHomeImageBtnParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 25px;
`;
