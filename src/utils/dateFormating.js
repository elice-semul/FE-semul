const dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export const dateFormatForOrderDetail = (date) => {
  const formatingDate = new Date(date);
  return `${formatingDate.getFullYear()}년 ${formatingDate.getMonth()}월 ${formatingDate.getDate()}일 ${
    dayArr[formatingDate.getDay()]
  }`;
};

export const dateFormatCommon = (date) => {
  const formatingDate = new Date(date);
  return `${formatingDate.getFullYear()}-${formatingDate.getMonth()}-${formatingDate.getDate()}`;
};
