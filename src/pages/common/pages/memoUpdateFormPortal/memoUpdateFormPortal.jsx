import ReactDOM from 'react-dom';

import { MemoUpdateFormModal } from '@/pages/common/sections';

const MemoUpdateFormPortal = (props) => {
  const modalRoot = document.querySelector('#modal-root');

  return ReactDOM.createPortal(<MemoUpdateFormModal {...props} />, modalRoot);
};

export default MemoUpdateFormPortal;
