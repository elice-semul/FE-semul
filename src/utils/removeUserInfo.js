export const removeUserInfo = (navigate) => {
  sessionStorage.removeItem('Authorization');
  navigate('/');
};
