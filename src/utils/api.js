import axios from 'axios';

const client = axios.create({
  baseURL: 'http://34.64.61.59:3000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('Authorization')}`,
  },
});

export const getProduct = async () => {
  const { data } = await client.get(`/products`);
  return data;
};

export const postOrder = async (orderObj) => {
  const { data } = await client.post(`/orders`, orderObj);
  return data;
};

export const getConnectOrder = (orderId) => async () => {
  const { data } = await client.get(`/orders/${orderId}`);
  const price = data.orderProducts.reduce((acc, cur) => {
    const temp = cur.price * cur.qty;
    return acc + temp;
  }, 0);

  return { data, price };
};

export const getCompleteOrders = async () => {
  const { data } = await client.get(`/orders`);
  return data;
};
