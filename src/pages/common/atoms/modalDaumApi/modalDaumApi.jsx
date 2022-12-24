import DaumPostcode from 'react-daum-postcode';

const ModalDaumApi = ({ setAddress, setDaumApi }) => {
  const onCompletePost = (data) => {
    setAddress(data.address);
    setDaumApi(false);
  };
  const postCodeStyle = {
    display: 'block',
    width: '100%',
    height: '380px',
    padding: '3px',
    zIndex: 100,
  };
  return <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />;
};

export default ModalDaumApi;
