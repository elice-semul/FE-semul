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
      axios.get('http://34.64.61.59:3000/products')
       .then((data) => {
        setPrice(data.data);
        setOrgPrice(data.data);
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