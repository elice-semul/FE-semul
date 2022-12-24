import ReactDOM from 'react-dom';

import { AddressFormModal } from '@/pages/common/sections';

const AddressFormPortal = (props) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<AddressFormModal {...props} />, modalRoot);
};

export default AddressFormPortal;
