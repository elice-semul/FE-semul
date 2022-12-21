import * as S from '@/pages/common/atoms/select/style';

const Select = ({
  className,
  options,
  onSelectChange: handleSelcetChange,
  width,
  height,
  register,
  registerName,
}) => {
  if (register && registerName) {
    return (
      <S.StyledSelect
        className={className}
        width={width}
        height={height}
        onChange={handleSelcetChange}
        {...register(registerName)}
      >
        {options.map((value) => (
          <S.StyledOption key={value} value={value}>
            {value}
          </S.StyledOption>
        ))}
      </S.StyledSelect>
    );
  }
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
