import styled from 'styled-components';

export const StyledFlex = styled.div`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height || 'auto'};
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
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent}
  align-items: ${(props) => props.alignItems}
  align-content: ${(props) => props.alignContent}
  gap: ${(props) => props.gap}
`;
