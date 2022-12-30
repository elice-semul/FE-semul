export const calculateEstimatedPrice = (products) => {
  const totalPrice = products.reduce((sum, { price, qty }) => {
    return sum + price * qty;
  }, 0);
  return totalPrice.toLocaleString('ko-KR');
};
