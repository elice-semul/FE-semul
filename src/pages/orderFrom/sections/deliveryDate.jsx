import { AiOutlineClockCircle } from 'react-icons/ai';

import LabeledInputAndBtn from '../atoms/labeledInputAndBtn';
const DeliveryDate = () => {
  return (
    <LabeledInputAndBtn placeholder="오늘날짜 넣어야함" labelContent="희망세탁일">
      <AiOutlineClockCircle size={30} />
    </LabeledInputAndBtn>
  );
};

export default DeliveryDate;
