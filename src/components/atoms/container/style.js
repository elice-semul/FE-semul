import styled from 'styled-components';

import { theme } from '@/styles/theme';

export const StyledContainer = styled.div`
  display: ${(props) => props.display || 'block'};
  background-color: ${(props) => props.backGroundColor || theme.colors.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
  align-items: ${(props) => props.alignItems || 'center'};
  padding: ${(props) => props.padding || '0'};
  margin: ${(props) => props.margin || '0'};
  margin-top: ${(props) => props.mt || '0'};
  margin-bottom: ${(props) => props.mb || '0'};
  margin-left: ${(props) => props.ml || '0'};
  margin-right: ${(props) => props.mr || '0'};
  padding-top: ${(props) => props.pt || '0'};
  padding-bottom: ${(props) => props.pb || '0'};
  padding-left: ${(props) => props.pl || '0'};
  padding-right: ${(props) => props.pr || '0'};
  border-radius: ${(props) => props.radius || theme.containers.borderRadius};
  box-shadow: ${(props) => (!props.shadow ? 'none' : theme.containers.shadow)};
`;
