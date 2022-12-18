import LabeledInput from '../atoms/labeledInput';
import SubmitBtn from '../atoms/submitBtn';
import DeliveryDate from '../sections/deliveryDate';
import ImportedDate from '../sections/importedDate';
import LaundrySpec from '../sections/laundrySpec';
import OrderHeader from '../sections/orderHeader';
import Price from '../sections/price';
import SelcetLaundry from '../sections/selectLaundry';

import { Container, Form } from '@/pages/common/atoms/index';

const OrderForm = () => {
  return (
    <Container>
      <Form>
        <OrderHeader />
        <ImportedDate />
        <SelcetLaundry />
        <LabeledInput labelContent="주소" />
        <LaundrySpec />
        <DeliveryDate />
        <LabeledInput labelContent="참고 및 유의사항" />
        <Price />
        <SubmitBtn />
      </Form>
    </Container>
  );
};

export default OrderForm;
