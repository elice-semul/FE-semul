import styled from 'styled-components';

export const StyledOrderImageSummaryContainer = styled.button`
  display: flex;
  width: 100%;
  height: 9.7vh;
  padding: 15px 25px;
  margin-top: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.background};
  border: 0;
`;

export const StyledOrderImageSummaryTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 70%;
  margin: auto;
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
  width: 30%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
`;
