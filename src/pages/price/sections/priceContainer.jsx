import axios from 'axios';
import { useState, useEffect } from 'react';

import PriceHeader from '../atoms/priceHeader/priceHeader';
import PriceMenu from '../atoms/priceMenu/priceMenu';
import PriceTable from '../atoms/priceTable/priceTable';

const PriceContainer = () => {
  const [price, setPrice] = useState([]);
  const [cate, setCate] = useState('ALL');
  const [orgPrice,setOrgPrice] = useState([]);

  useEffect(() => {
      axios.get('/products')
       .then((data) => {
        setPrice(data.data.produceList);
        setOrgPrice(data.data.produceList);
     });
  }, []);

  return (
    <>
      <PriceHeader price={price} orgPrice={orgPrice} setPrice={setPrice}/>
      <PriceMenu setPrice={setPrice} orgPrice={orgPrice} setCate={setCate}/>
      <PriceTable price={price} cate={cate}/>
    </>
  );
};

export default PriceContainer;