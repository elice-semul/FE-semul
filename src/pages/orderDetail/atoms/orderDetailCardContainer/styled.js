import styled from 'styled-components';

import { Typography } from '@/pages/common/sections';

export const StyledOrderDetailCardContainer = styled.div`
  width: 100%;
  height: 62.1vh;
  display: flex;
  flex-flow: column;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 35px 50px;
  white-space: pre-line;
`;

export const StyledOrderCardDateText = styled.span`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SecondLineTypography = styled.div`
  margin-top: 0;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 3.9rem;
`;

export const StyledOrderDetailDescription = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 19.36px;
`;
