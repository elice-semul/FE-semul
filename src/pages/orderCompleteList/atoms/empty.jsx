import { BsBasket3 } from 'react-icons/bs';

import { Flex, Span } from '@/pages/common/atoms/index';

const Empty = () => {
  return (
    <Flex padding="15% 0 0 0" flexDirection="column" alignItems="center" gap="3rem">
      <BsBasket3 size="100%" />
      <Span fontSize="3rem" fontWeight="bold" color="primary" width="100%">
        세탁물이 없어요!
      </Span>
    </Flex>
  );
};

export default Empty;
