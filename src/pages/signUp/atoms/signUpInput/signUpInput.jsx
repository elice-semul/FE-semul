import { StyledSignUpInput, StyledSignUpLabel }  from './styled';

const SignUpInput = ({ labelText, htmlFor, id, type, className }) => {
  return (
    <>
      <StyledSignUpLabel htmlFor={htmlFor}>{labelText}</StyledSignUpLabel>
      <StyledSignUpInput id={id} className={className} type={type}/>
    </>
  );
};

export default SignUpInput;
