import axios from 'axios';
import { useState, useEffect } from 'react';

import PriceHeader from '../atoms/priceHeader/priceHeader';
import PriceMenu from '../atoms/priceMenu/priceMenu';
import PriceTable from '../atoms/priceTable/priceTable';

const PriceContainer = () => {
  const [price, setPrice] = useState([]);

  useEffect(() => {
      axios.get('/products')
       .then((data) => {
        setPrice(data.data.produceList);
     });
  }, []);

  return (
    <>
      <PriceHeader/>
      <PriceMenu setPrice={setPrice}/>
      <PriceTable price={price}/>
    </>
  );
};

export default PriceContainer;