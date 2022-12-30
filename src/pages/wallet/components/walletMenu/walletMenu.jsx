import { useState } from 'react';

import useWallet from '@/hooks/useWallet';
import { Container } from '@/pages/common/atoms';
import PortalModal from '@/pages/common/pages/portalModal/portalModal';
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

const transformTextToMoneyAmount = (text) => {
  const [moneyAmount] = text.split('만원');
  return Number(moneyAmount);
};

const WalletMenu = () => {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [modalText, setModalText] = useState('');
  const { chargeMoneyInWallet } = useWallet();

  const handleMenuClick = (text) => {
    setIsModalShowing(true);
    setModalText(text);
  };

  const handleConfirmClick = () => {
    chargeMoneyInWallet.mutate({ money: transformTextToMoneyAmount(modalText) });
  };

  const handleCancelClick = () => {
    setIsModalShowing(false);
  };

  const handleSuccessClick = () => {
    setIsModalShowing(false);
  };

  const mapedMock = mock.map(({ strongText, ...props }, index) => (
    <div key={index} onClick={() => handleMenuClick(strongText)}>
      <WalletPrice {...{ strongText }} {...props} />
    </div>
  ));

  return (
    <Container margin="3.2rem 0 9.6rem">
      {mapedMock}
      {isModalShowing && (
        <PortalModal
          text={`${modalText}만원 충전 하시겠습니까?`}
          successText="충전 완료!"
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          onCancel={handleCancelClick}
          onSuccess={handleSuccessClick}
        />
      )}
    </Container>
  );
};

export default WalletMenu;
