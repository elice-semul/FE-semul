import { Typography } from '../common/sections/index';
import { WashBlock } from './atoms';
import {
  LaundryConnectCard,
  LaundryInspectCard,
  LaundryIngCard,
  LaundryArrivalCard,
} from './sections';
import { StyledOrderDetailContainer } from './styled';

import Toggle from '@/pages/orderCompleteList/atoms/toggle';
import { ORDER_STATUS } from '@/utils/orderStatus';

const washData = [
  {
    url: '../src/assets/images/clothThumbnail-1.jpeg',
    id: '000001',
    name: '일반 패딩',
    isCompleted: true,
  },
  {
    url: '../src/assets/images/clothThumbnail-2.jpeg',
    id: '000002',
    name: '운동화',
    isCompleted: false,
  },
];

const OrderDetail = () => {
  return (
    <StyledOrderDetailContainer>
      <Typography text="새물님의 세탁 기록" strongText="새물" />
      <Toggle />
      {/* <LaundryConnectCard /> */}
      <LaundryInspectCard {...{ washData }} />
      {/* <LaundryIngCard estimatedTime="2022. 12. 15. 12:00" {...{ washData }} /> */}
      {/* <LaundryArrivalCard /> */}
    </StyledOrderDetailContainer>
  );
};

export default OrderDetail;
