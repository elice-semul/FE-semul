const dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export const dateFormatForOrderDetail = (createdAt) => {
  const date = new Date(createdAt);
  return `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${
    dayArr[date.getDay()]
  }`;
};
