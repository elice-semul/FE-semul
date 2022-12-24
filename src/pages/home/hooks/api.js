import { authInstance } from '@/utils/apiInstance';

export const getCurrentUserApi = async () => {
  try {
    const { data } = await authInstance.get('/users');
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export const getCurrentOrdersApi = async () => {
  try {
    const { data } = await authInstance.get('/orders');
    return data;
  } catch (e) {
    throw new Error(err);
  }
};

// export const updateUserAddressApi = async (updateUser) => {
//   try {

//   } catch (e) {}
// };
