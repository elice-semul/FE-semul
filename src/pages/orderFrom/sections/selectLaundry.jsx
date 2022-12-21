import { SlMagnifier } from 'react-icons/sl';

import LabeledInputAndBtn from '../atoms/labeledInputAndBtn';
const SelcetLaundry = ({ register, registerName }) => {
  return (
    <LabeledInputAndBtn
      placeholder="우리 동네 세탁소 찾기"
      labelContent="세탁소선택"
      register={register}
      registerName={registerName}
    >
      <SlMagnifier size={30} />
    </LabeledInputAndBtn>
  );
};

export default SelcetLaundry;
