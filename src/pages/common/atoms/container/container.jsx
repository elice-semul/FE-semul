import { StyledContainer } from '@/pages/common/atoms/container/style';

const Container = ({
  children,
  display,
  position,
  backGroundColor,
  width,
  height,
  alignItems,
  padding,
  margin,
  shadow,
  radius,
}) => {
  return (
    <StyledContainer
      display={display}
      position={position}
      backGroundColor={backGroundColor}
      width={width}
      height={height}
      alignItems={alignItems}
      padding={padding}
      margin={margin}
      shadow={shadow}
      radius={radius}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
