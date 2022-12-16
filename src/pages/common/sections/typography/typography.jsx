import { Div, Span } from '@/pages/common/atoms';

const getTypographyByStrongText = (text, strongText, spanStyle) => {
  const [leftText, rightText] = text.split(strongText);

  return (
    <>
      {leftText}
      <Span {...spanStyle}>{strongText}</Span>
      {rightText}
    </>
  );
};

const Typography = ({ text, strongText, divStyle, spanStyle }) => {
  return <Div {...divStyle}>{getTypographyByStrongText(text, strongText, spanStyle)}</Div>;
};

export default Typography;
