import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import LabeledInput from '../atoms/labeledInput';
import SubmitBtn from '../atoms/submitBtn';
import DeliveryDate from '../sections/deliveryDate';
import LaundrySpec from '../sections/laundrySpec';
import OrderHeader from '../sections/orderHeader';
import PickupDate from '../sections/pickupDate';
import Price from '../sections/price';
import SelcetLaundry from '../sections/selectLaundry';
import SpecTable from '../sections/specTable';

import { Container, Form } from '@/pages/common/atoms/index';
import * as API from '@/utils/api';
const OrderForm = () => {
  const [laundryTable, setLaundryTable] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const { register, handleSubmit, getValues, setValue } = useForm();
  const { status, data: product, error } = useQuery(['product'], API.getProduct);
  const mutation = useMutation(['order'], API.postOrder);

  const navigate = useNavigate();

  const handleLaundryRemoveBtnClick = (idx) => () => {
    setLaundryTable((prev) => {
      const copyList = [...prev];
      copyList.splice(idx, 1);
      return copyList;
    });
  };

  const handleLaundryAddBtnClick = (itemObj) => {
    setValue('option', inputValue);
    const products = {
      ...itemObj,
      qty: getValues('quantity'),
    };
    setValue('quantity', 1);
    setLaundryTable([products, ...laundryTable]);
    setInputValue('');
  };

  const onSubmit = (data) => {
    const laundeyOrders = laundryTable.map((item) => {
      const refinedArr = { id: item.id, qty: Number(item.qty) };
      return refinedArr;
    });

    const obj = {
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
      laundryId: '14112ad5-5238-4eab-abc1-b41ec66ef238',
    };
    mutation.mutate(obj, {
      onSuccess: (data) => {
        navigate('complete', {
          state: { id: data.id },
        });
      },
    });
  };

  if (status === 'loading') {
    return <Container>loading</Container>;
  }

  if (error) {
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
        <SelcetLaundry register={register} registerName="laundryId" />
        <LabeledInput labelContent="주소" register={register} registerName="address" />
        {laundryTable.length !== 0 && (
          <SpecTable laundryTable={laundryTable} onRemoveBtnClick={handleLaundryRemoveBtnClick} />
        )}
        <LaundrySpec
          options={product}
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
    </Container>
  );
};

export default OrderForm;
