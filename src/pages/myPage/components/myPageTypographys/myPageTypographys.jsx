import { Typography } from '@/pages/common/sections';

const MyPageTypographys = ({ money }) => {
  return (
    <>
      <Typography text="고객님 안녕하세요." strongText="고객" />
      <Typography
        text="지갑에 현재 잔액은"
        strongText="잔액"
        divStyle={{ fontWeight: '600', fontSize: '2.4rem', lineHeight: '2.9rem' }}
      />
      <Typography
        text={`${money}원 입니다.`}
        strongText={money}
        divStyle={{
          margin: '1.6rem 0 0',
          fontWeight: '600',
          fontSize: '2.4rem',
          lineHeight: '2.9rem',
        }}
      />
    </>
  );
};

export default MyPageTypographys;
