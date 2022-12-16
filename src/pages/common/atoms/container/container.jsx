import { StyledContainer } from '@/pages/common/atoms/container/style';

const Container = ({
  children,
  display,
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
