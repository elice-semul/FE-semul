import { Typography } from '@/pages/common/sections';

const MyPageTypographys = () => {
  return (
    <>
      <Typography text="새물님 안녕하세요." strongText="새물" />
      <Typography
        text="지갑에 현재 잔액은"
        strongText="잔액"
        divStyle={{ fontWeight: '600', fontSize: '2.4rem', lineHeight: '2.9rem' }}
      />
      <Typography
        text={`${(1234567).toLocaleString()}원 입니다.`}
        strongText={(1234567).toLocaleString()}
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
