import LabeledInputAndSelect from '../atoms/labeledInputAndSelect';

const SelcetLaundry = ({ register, registerName, options }) => {
  return (
    <LabeledInputAndSelect
      labelContent="세탁소 선택"
      options={options.data}
      register={register}
      registerName={registerName}
    />
  );
};

export default SelcetLaundry;
