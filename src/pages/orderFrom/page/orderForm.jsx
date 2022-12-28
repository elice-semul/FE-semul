import { useState } from 'react';
import { useForm } from 'react-hook-form';

import LabeledInput from '../atoms/labeledInput';
import SubmitBtn from '../atoms/submitBtn';
import useGetCurrentUser from '../hooks/useGetCurrentUser';
import useGetLaundryAndProduct from '../hooks/useGetLaundryAndProduct';
import usePostOrder from '../hooks/usePostOrder';
import DeliveryDate from '../sections/deliveryDate';
import LaundrySpec from '../sections/laundrySpec';
import OrderHeader from '../sections/orderHeader';
import PickupDate from '../sections/pickupDate';
import Price from '../sections/price';
import SelcetLaundry from '../sections/selectLaundry';
import SpecTable from '../sections/specTable';

import { Container, Form } from '@/pages/common/atoms/index';
import { PortalModal } from '@/pages/common/pages';
import { ErrorUtil } from '@/utils/errorUtil';
const OrderForm = () => {
  const [laundryTable, setLaundryTable] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalShowing, setIsModalShowing] = useState(false);

  // const user = useGetCurrentUser();
  const { product, laundry } = useGetLaundryAndProduct();
  const mutation = usePostOrder();

  const { register, handleSubmit, getValues, setValue } = useForm();

  const handleConfirmClick = () => setIsModalShowing(false);

  const handleLaundryRemoveBtnClick = (idx) => () => {
    setLaundryTable((prev) => {
      const copyList = [...prev];
      copyList.splice(idx, 1);
      return copyList;
    });
  };

  const handleLaundryAddBtnClick = (itemObj) => {
    const sameLaundryIndex = laundryTable.findIndex((value) => value.id === itemObj.id);
    if (sameLaundryIndex !== -1) {
      setLaundryTable((prev) => {
        const newTable = [...prev];
        let acc = Number(newTable[t].qty);
        acc += Number(getValues('quantity'));
        newTable[t].qty = acc;
        return newTable;
      });
      setValue('quantity', 1);
      setInputValue('');
    } else {
      setValue('option', inputValue);
      const products = {
        ...itemObj,
        qty: getValues('quantity'),
      };
      setValue('quantity', 1);
      setLaundryTable([products, ...laundryTable]);
      setInputValue('');
    }
  };

  const onSubmit = (data) => {
    const laundeyOrders = laundryTable.map((item) => {
      const refinedArr = { id: item.id, qty: Number(item.qty) };
      return refinedArr;
    });

    const laundryId = laundry.data.filter((value) => {
      return value.name === getValues('laundryId');
    });

    const postObj = {
      status: 'connect',
      pickUpMethod: data.pickUpMethod,
      notice: data.notice,
      pickUpDateTime: data.pickUpDateTime,
      wishLaundryDateTime: data.wishLaundryDateTime,
      address: {
        roadAddr: '도로명 주소 몇 번길',
        detailAddr: '몇동 몇호',
        jibun: '지번 몇 번지',
      },
      products: laundeyOrders,
      laundryId: laundryId[0].id,
    };

    if (!ErrorUtil.invalidVariable(Object.values(postObj).every((v) => v))) {
      setIsModalShowing(true);
    } else {
      mutation.mutate(postObj);
    }
  };

  if ((product.status || laundry.status) === 'loading') {
    return <Container>loading</Container>;
  }

  if (product.error || laundry.error) {
    return <Container>error</Container>;
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <OrderHeader />
        <PickupDate
          register={register}
          registerName="pickUpDateTime"
          selectRegister={register}
          selectRegisterName="pickUpMethod"
        />
        <SelcetLaundry register={register} registerName="laundryId" options={laundry} />
        <LabeledInput
          labelContent="주소"
          register={register}
          registerName="address"
          // defaultValue={user.data.address.roadAddr}
        />
        {laundryTable.length !== 0 && (
          <SpecTable laundryTable={laundryTable} onRemoveBtnClick={handleLaundryRemoveBtnClick} />
        )}
        <LaundrySpec
          options={product.data}
          register={register}
          registerName="option"
          quantityRegister={register}
          quantityRegisterName="quantity"
          onLaundryAddBtnClick={handleLaundryAddBtnClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <DeliveryDate register={register} registerName="wishLaundryDateTime" />
        <LabeledInput labelContent="참고 및 유의사항" register={register} registerName="notice" />
        <Price laundryTable={laundryTable} />
        <SubmitBtn />
      </Form>
      {isModalShowing && (
        <PortalModal
          text="정보를 모두 입력해주세요."
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          cancelYn={false}
        />
      )}
    </Container>
  );
};

export default OrderForm;
