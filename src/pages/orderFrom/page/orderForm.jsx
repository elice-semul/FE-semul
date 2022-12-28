import { useMemo, useState } from 'react';
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

import { Container, Form } from '@/pages/common/atoms/index';
import { PortalModal } from '@/pages/common/pages';
import { Header } from '@/pages/common/sections';
import { ErrorUtil } from '@/utils/errorUtil';

const OrderForm = () => {
  const [laundryTable, setLaundryTable] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [isMoneyModalShowing, setIsMoneyModalShowing] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { register, handleSubmit, getValues, setValue } = useForm();

  const { product, laundry } = useGetLaundryAndProduct();
  const user = useGetCurrentUser(setValue);
  const mutation = usePostOrder();

  const navigate = useNavigate();
  useMemo(() => {
    const total = laundryTable.reduce((acc, cur) => {
      const price = Number(cur.price) * Number(cur.qty);
      return acc + price;
    }, 0);
    setTotalPrice(total);
  }, [laundryTable]);

  const handleConfirmClick = () => setIsModalShowing(false);
  const handleMoneyModalCancel = () => setIsMoneyModalShowing(false);
  const handleRedirectMypage = () => {
    navigate('/myPage');
  };
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
        let acc = Number(newTable[sameLaundryIndex].qty);
        acc += Number(getValues('quantity'));
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
      status: 'connect',
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
      setIsModalShowing(true);
    } else if (totalPrice > user.money) {
      setIsMoneyModalShowing(true);
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
      <Header>세탁신청</Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          text="정보를 모두 입력해주세요."
          onShow={setIsModalShowing}
          onConfirm={handleConfirmClick}
          cancelYn={false}
        />
      )}
      {isMoneyModalShowing && (
        <PortalModal
          text="포인트가 부족해요! 충전하러가기"
          onShow={setIsMoneyModalShowing}
          onConfirm={handleRedirectMypage}
          onCancel={handleMoneyModalCancel}
          onSuccess={handleMoneyModalCancel}
        />
      )}
    </Container>
  );
};

export default OrderForm;
