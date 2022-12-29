import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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

import { Container, Form, Loading } from '@/pages/common/atoms/index';
import { PortalModal } from '@/pages/common/pages';
import { Header } from '@/pages/common/sections';
import { ErrorUtil } from '@/utils/errorUtil';
import { ORDER_STATUS } from '@/utils/orderStatus';

const ERROR_TEXT = {
  EMPTY: '정보를 모두 입력해주세요!',
  MONEY: '잔액이 부족해요! 충전하러 가기',
  WRONG: '세탁물을 확인해주세요!',
};

const OrderForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('Authorization')) {
      navigate('/login');
    }
  });

  const [laundryTable, setLaundryTable] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const { register, handleSubmit, getValues, setValue } = useForm();
  const user = useGetCurrentUser(setValue);
  const mutation = usePostOrder();
  const { product, laundry } = useGetLaundryAndProduct();

  useMemo(() => {
    const total = laundryTable.reduce((acc, cur) => {
      const price = Number(cur.price) * Number(cur.qty);
      return acc + price;
    }, 0);
    setTotalPrice(total);
  }, [laundryTable]);

  const handleConfirmClick = () => {
    if (errorText === ERROR_TEXT.EMPTY || errorText === ERROR_TEXT.WRONG) setIsModalShowing(false);
    else navigate('/myPage');
  };
  const handleMoneyModalCancel = () => setIsModalShowing(false);

  const handleLaundryRemoveBtnClick = (idx) => () => {
    setLaundryTable((prev) => {
      const copyList = [...prev];
      copyList.splice(idx, 1);
      return copyList;
    });
  };

  const handleLaundryAddBtnClick = (itemObj) => {
    if (Object.values(itemObj).length === 0) {
      setErrorText(ERROR_TEXT.WRONG);
      setIsModalShowing(true);
      return;
    }

    const sameLaundryIndex = laundryTable.findIndex((value) => value.id === itemObj.id);

    if (sameLaundryIndex !== -1) {
      setLaundryTable((prev) => {
        const newTable = [...prev];
        const acc = Number(newTable[sameLaundryIndex].qty) + Number(getValues('quantity'));
        newTable[sameLaundryIndex].qty = acc;
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

  const preprocesPostData = (data) => {
    const laundeyOrders = laundryTable.map((item) => {
      const refinedArr = { id: item.id, qty: Number(item.qty) };
      return refinedArr;
    });

    const laundryId = laundry.data.filter((value) => {
      return value.name === getValues('laundryId');
    });

    const postObj = {
      status: ORDER_STATUS.CONNECT,
      pickUpMethod: data.pickUpMethod,
      notice: data.notice,
      pickUpDateTime: data.pickUpDateTime,
      wishLaundryDateTime: data.wishLaundryDateTime,
      address: {
        roadAddr: user.address.roadAddr,
        detailAddr: user.address.detailAddr,
        jibun: user.address.jibun,
      },
      products: laundeyOrders,
      laundryId: laundryId[0].id,
    };

    return postObj;
  };

  const onSubmit = (data) => {
    const postObj = preprocesPostData(data);
    const valiedFlag = ErrorUtil.invalidVariable(Object.values(postObj).every((v) => v));
    if (!valiedFlag.status) {
      setErrorText(ERROR_TEXT.EMPTY);
      setIsModalShowing(true);
    } else if (totalPrice > user.money) {
      setErrorText(ERROR_TEXT.MONEY);
      setIsModalShowing(true);
    } else if (postObj.products.length === 0) {
      setErrorText(ERROR_TEXT.EMPTY);
      setIsModalShowing(true);
    } else {
      mutation.mutate({ postObj, totalPrice });
    }
  };

  if ((product.status || laundry.status) === 'loading') {
    return <Loading />;
  }

  if (product.error || laundry.error) {
    return <Container>error</Container>;
  }

  return (
    <Container>
      <Header>세탁신청</Header>
      <Form margin='2rem' onSubmit={handleSubmit(onSubmit)}>
        <OrderHeader />
        <PickupDate
          register={register}
          registerName="pickUpDateTime"
          selectRegister={register}
          selectRegisterName="pickUpMethod"
        />
        <SelcetLaundry register={register} registerName="laundryId" options={laundry} />
        <LabeledInput labelContent="주소" register={register} registerName="address" />
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
        <Price total={totalPrice} />
        <SubmitBtn />
      </Form>
      {isModalShowing && (
        <PortalModal
          text={errorText}
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          onCancel={handleMoneyModalCancel}
        />
      )}
    </Container>
  );
};

export default OrderForm;
