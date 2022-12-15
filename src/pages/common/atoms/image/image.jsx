import { StyledImage } from './styled';

const Image = ({ src, alt, width, height, objectFit, borderRadius }) => {
  return (
    <StyledImage
      {...{ src }}
      {...{ alt }}
      {...{ width }}
      {...{ height }}
      {...{ objectFit }}
      {...{ borderRadius }}
    />
  );
};

export default Image;
