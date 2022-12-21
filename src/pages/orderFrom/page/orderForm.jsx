import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
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
const OrderForm = () => {
  const { register, handleSubmit, getValues, setValue } = useForm();
  const [table, setTable] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const navigate = useNavigate();

  const {
    status,
    data: product,
    error,
  } = useQuery(['product'], async () => {
    const { data } = await axios.get('/mock/products');
    const productTable = data.result.map((value) => `${value.productName} ${value.price}원`);
    return { productTable, data };
  });

  const mutation = useMutation(['order'], async (order) => {
    const { data } = await axios.post('/mock/orders', order);
    return data;
  });

  const handleQuantityRemoveBtnClick = (idx) => () => {
    setTable((prev) => {
      const newList = [...prev];
      newList.splice(idx, 1);
      return newList;
    });
  };

  const handleLaundryBtnClick = () => {
    setValue('option', inputValue);

    const obj = {
      option: inputValue,
      quantity: String(getValues('quantity')),
    };

    setValue('quantity', 1);
    setTable([obj, ...table]);
    setInputValue('');
  };

  const onSubmit = (data, e) => {
    mutation.mutate(data, {
      onSuccess: navigate('complete', {
        state: {
          totalPrice: '20000',
          paymentDate: '2022-12-21',
          address: '새물시 새물동 새물집',
          wishDate: '2022-12-30',
          notice: '잘해주십시오',
        },
      }),
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
          registerName="pickup"
          selectRegister={register}
          selectRegisterName="pickupMethod"
        />
        <SelcetLaundry register={register} registerName="laundry" />
        <LabeledInput labelContent="주소" register={register} registerName="address" />
        {table.length !== 0 && (
          <SpecTable table={table} onRemoveBtnClick={handleQuantityRemoveBtnClick} />
        )}
        <LaundrySpec
          options={product.productTable}
          register={register}
          registerName="option"
          quantityRegister={register}
          quantityRegisterName="quantity"
          onPlusBtnClick={handleLaundryBtnClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <DeliveryDate register={register} registerName="arrival" />
        <LabeledInput labelContent="참고 및 유의사항" register={register} registerName="notice" />
        <Price totalPrice={table} />
        <SubmitBtn />
      </Form>
    </Container>
  );
};

export default OrderForm;
