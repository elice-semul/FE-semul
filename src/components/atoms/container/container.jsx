import { StyledContainer } from '@/components/atoms/container/style';

const Container = ({
  children,
  display,
  backGroundColor,
  width,
  height,
  alignItems,
  padding,
  margin,
  mt,
  mb,
  ml,
  mr,
  pt,
  pb,
  pl,
  pr,
  shadow,
  radius,
}) => {
  return (
    <StyledContainer
      display={display}
      backGroundColor={backGroundColor}
      width={width}
      height={height}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      pt={pt}
      pb={pb}
      pl={pl}
      pr={pr}
      shadow={shadow}
      radius={radius}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
