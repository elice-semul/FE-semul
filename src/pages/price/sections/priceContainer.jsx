import axios from 'axios';
import { useState, useEffect } from 'react';

import PriceHeader from '../atoms/priceHeader/priceHeader';
import PriceMenu from '../atoms/priceMenu/priceMenu';
import PriceTable from '../atoms/priceTable/priceTable';

import { createFuzzyMatcher } from '@/pages/price/search/search';
const BASE_URL = import.meta.env.VITE_BASE;

const PriceContainer = () => {
  const [price, setPrice] = useState([]);
  const [cate, setCate] = useState('ALL');
  const [orgPrice, setOrgPrice] = useState([]);
  const [sort, setSort] = useState(true);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}/products`).then((data) => {
      const sortPrice = sort
        ? data.data.sort((a, b) => a.price - b.price)
        : data.data.sort((a, b) => a.price - b.price).reverse();
      const result = sortPrice.filter((resultPrice) => resultPrice.category === cate);

      if (cate === 'ALL') {
        if (keyword) {
          const allKeyword = sortPrice.filter((search) =>
            createFuzzyMatcher(keyword).test(search.name)
          );
          setPrice(allKeyword);
          setOrgPrice(allKeyword);
        } else {
          setPrice(sortPrice);
          setOrgPrice(sortPrice);
        }
      }

      if (cate !== 'ALL') {
        if (keyword) {
          const keyWordResult = result.filter((search) =>
            createFuzzyMatcher(keyword).test(search.name)
          );
          setPrice(keyWordResult);
          setOrgPrice(keyWordResult);
        } else {
          setPrice(result);
          setOrgPrice(result);
        }
      }
    });
  }, [cate, sort, keyword]);

  return (
    <>
      <PriceHeader
        price={price}
        orgPrice={orgPrice}
        setPrice={setPrice}
        setCate={setCate}
        cate={cate}
        setKeyword={setKeyword}
      />
      <PriceMenu setPrice={setPrice} orgPrice={orgPrice} setCate={setCate} />
      <PriceTable price={price} cate={cate} setSort={setSort} sort={sort} />
    </>
  );
};

export default PriceContainer;
