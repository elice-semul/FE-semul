import { StyledFlex } from '@/pages/common/atoms/flex/style';

const Flex = ({
  children,
  width,
  height,
  padding,
  margin,
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
