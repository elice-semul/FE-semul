import axios from 'axios';
import { useState, useEffect } from 'react';

import { StyledPriceTable } from './styled';

const priceTable =  ({ price ,cate}) => {
  
const list = price.map((i,index) => (
    <tr key={index}>
      <td>{i.name}</td>
      <td>{i.price}원</td>
    </tr>
));

  return (
    <StyledPriceTable>
        <thead>
          <tr>
            <th>{cate}</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
            {list}    
        </tbody>
    </StyledPriceTable>
  )
};

export default priceTable;
