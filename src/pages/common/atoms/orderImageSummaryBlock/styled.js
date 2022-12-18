import styled from 'styled-components';

export const StyledOrderImageSummaryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 9.7vh;
  padding: 15px 25px;
  margin: 30px 20px 10px 0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
`;

export const StyledOrderImageSummaryTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 6.8359vh;
  justify-content: space-between;
  text-align: left;
`;

export const StyledOrderImageSummaryText = styled.p`
  font-size: 14px;
`;

export const StyledOrderImageSummaryPrice = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
`;

export const StyledOrderSummaryImage = styled.img`
  width: 15.9vw;
  height: 6.8359vh;
  border: 1px solid ${(props) => props.theme.colors.black};
  border-radius: 10px;
`;
