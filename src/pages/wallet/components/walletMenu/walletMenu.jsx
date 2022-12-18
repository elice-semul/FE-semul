import { Container } from '@/pages/common/atoms';
import { WalletPrice } from '@/pages/wallet/sections';

const mock = [
  {
    text: '15 만원',
    strongText: '15',
  },
  {
    text: '30 만원',
    strongText: '30',
  },
  {
    text: '45 만원',
    strongText: '45',
  },
];

const mapedMock = mock.map(({ ...props }, index) => <WalletPrice key={index} {...props} />);

const WalletMenu = () => {
  return <Container margin="3.2rem 0 9.6rem">{mapedMock}</Container>;
};

export default WalletMenu;
