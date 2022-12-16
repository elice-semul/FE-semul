import { Typography } from '@/pages/common/sections';

const Typographys = () => {
  return (
    <>
      <Typography
        divStyle={{ fontWeight: '700', fontSize: '3.2rem', lineHeight: '3.9rem' }}
        text="새물님 안녕하세요."
        strongText="새물"
      />
      <Typography text="지갑에 현재 잔액은" strongText="잔액" />
      <Typography
        divStyle={{ margin: '1.6rem 0 0' }}
        text={`${(1234567).toLocaleString()}원 입니다.`}
        strongText={(1234567).toLocaleString()}
      />
    </>
  );
};

export default Typographys;
