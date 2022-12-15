import { StyledFlex } from '@/pages/common/atoms/flex/style';

const Flex = ({
  children,
  width,
  height,
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
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
}) => {
  return (
    <StyledFlex
      width={width}
      height={height}
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
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      alignContent={alignContent}
      gap={gap}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
