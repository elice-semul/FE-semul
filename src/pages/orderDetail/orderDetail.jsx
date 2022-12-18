import { WashBlock } from './atoms';

const orderStatus = {
  CONNECT: 'connect',
  INSPECT: 'inspect',
  LAUNDRY: 'laundry',
  ARRIVAL: 'arrival',
};

const OrderDetail = () => {
  return (
    <div>
      <WashBlock />
    </div>
  );
};

export default OrderDetail;
