import * as S from '@/pages/common/atoms/select/style';

const Select = ({ className, options, onSelectChange: handleSelcetChange, width, height }) => {
  return (
    <S.StyledSelect
      className={className}
      width={width}
      height={height}
      onChange={handleSelcetChange}
    >
      {options.map((value) => (
        <S.StyledOption key={value} value={value}>
          {value}
        </S.StyledOption>
      ))}
    </S.StyledSelect>
  );
};

export default Select;
