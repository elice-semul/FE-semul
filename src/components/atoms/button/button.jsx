import { StyledButton } from '@/components/atoms/button/style';

const Button = ({
  children,
  onBtnClick: handleBtnClick,
  backGroundColor,
  color,
  padding,
  margin,
  height,
  width,
  shadow,
  radius,
}) => {
  return (
    <StyledButton
      onClick={handleBtnClick}
      backGroundColor={backGroundColor}
      color={color}
      height={height}
      width={width}
      padding={padding}
      margin={margin}
      shadow={shadow}
      radius={radius}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
