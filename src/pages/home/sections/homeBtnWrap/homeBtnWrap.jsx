import { HomeImageBtn, HomeTitle } from '../../atoms/index';
import { StyledHomeBtnWrap, StyledHomeBtnContainter } from './styled';

const homeBtnData = [
  {
    id: 1,
    url: 'src/assets/images/homeBtnImage-2.jpg',
    title: '세탁 가격',
    paragraph: `합리적인\n세탁 가격`,
  },
  {
    id: 2,
    url: 'src/assets/images/homeBtnImage-1.jpg',
    title: '세탁 신청',
    paragraph: `전문적인\n동네 세탁소`,
  },
];

const HomeBtnWrap = () => {
  return (
    <StyledHomeBtnWrap>
      <HomeTitle>{`나를 위한 정성\n편리한 세탁 서비스`}</HomeTitle>
      <StyledHomeBtnContainter>
        {homeBtnData.map((data) => {
          return (
            <HomeImageBtn
              key={data.id}
              url={data.url}
              title={data.title}
              paragraph={data.paragraph}
            />
          );
        })}
      </StyledHomeBtnContainter>
    </StyledHomeBtnWrap>
  );
};

export default HomeBtnWrap;
