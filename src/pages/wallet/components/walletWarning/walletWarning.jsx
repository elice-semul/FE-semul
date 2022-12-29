import { P } from '@/pages/common/atoms';

const mock = [
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta facilis accusantium numquam. Quam neque ipsa vero minima. Voluptatum, molestias eaque.',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta facilis accusantium numquam. Quam neque ipsa vero minima. Voluptatum, molestias eaque.',
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta facilis accusantium numquam. Quam neque ipsa vero minima. Voluptatum, molestias eaque.',
  },
];

const mapedMock = mock.map(({ text }, index) => (
  <P key={index} fontSize="1rem" lineHeight="1.5rem" margin="0 0 0.8rem">
    {text}
  </P>
));

const WalletWarning = () => {
  return (
    <div>
      <P fontSize="1.2rem" lineHeight="1.5rem" margin="0 0 1.6rem">
        지갑 충전시 유의사항
      </P>
      {mapedMock}
    </div>
  );
};

export default WalletWarning;
