import {useEffect, useState} from 'react';

import { StyledUpdateInput, StyledUpdateLabel }  from './styled';

import SignUpSpan from "@/pages/signup/atoms/signUpSpan/signUpSpan";

const UpdateInput = ({
    labelText, 
    htmlFor, 
    id, 
    type, 
    className,
    value, 
    values,
    readonly,
    setValues,
    setPassword,

}) => {

    const [updateAlert, setUpdateAlert] = useState({
        name:'',
        phoneNumber: '',
        address: '',
        detailAddress: '',
        email: '',
        password:'',
        passwordCheck:''
    });


    const handleContainerChange = (e) => {
        const korean = /^[ㄱ-ㅎ|가-힣]+$/;
        const phone = /^[0-9]+$/;
        const passCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        const emailCheck = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if(e.target.value !== '' || e.target.id === 'address'){
            setUpdateAlert({
                ...updateAlert,
                [e.target.id]: '',
            })
        }

        if(e.target.id !== 'password' && e.target.value === ''){
            setUpdateAlert({
                ...updateAlert,
                [e.target.id]: labelText + '를 입력해 주세요',
            })
        }

        if(e.target.id !== 'password') {
            setValues({
                ...values,
                [e.target.id]: e.target.value,
            })
        }

        if(e.target.id === 'name'){
            if(!korean.test(e.target.value)){
                setUpdateAlert({
                    ...updateAlert,
                    'name': '한글만 입력 가능합니다.',
                })
                setValues({
                    ...values,
                    'name': '',
                })
            }else{
                setValues({
                    ...values,
                    'name': e.target.value,
                })
            }
        }

        if(e.target.id === 'phoneNumber'){
            if(!phone.test(e.target.value)){
                setUpdateAlert({
                    ...updateAlert,
                    'phoneNumber': '숫자만 입력 가능합니다.',
                })
                setValues({
                    ...values,
                    'phoneNumber': '',
                })
            }else{
                setValues({
                    ...values,
                    'phoneNumber':  e.target.value,
                })
            }
        }

        if(e.target.id === 'email'){
            if(!emailCheck.test(e.target.value)){
                setUpdateAlert({
                    ...updateAlert,
                    'email': '이메일 형식이 다릅니다.',
                })
                setValues({
                    ...values,
                    'email': '',
                })
            }else{
                setValues({
                    ...values,
                    'email':  e.target.value,
                })
            }
        }

        if(e.target.id === 'password'){
            if(!passCheck.test(e.target.value)){
                if(e.target.value){
                    setUpdateAlert({
                        ...updateAlert,
                        'password': '숫자+영문자+특수문자 조합으로 8자리 이상 입력가능합니다.',
                    })
                    setPassword('fail');
                }else{
                    setUpdateAlert({
                        ...updateAlert,
                        'password': '',
                    })
                    setPassword(e.target.value);
                }

            }else{
                setPassword(e.target.value);

            }
        }
    };

    return (
        <>
            <StyledUpdateLabel htmlFor={htmlFor}>{labelText}</StyledUpdateLabel>
            <StyledUpdateInput
                            id={id}
                            className={className}
                            onBlur={handleContainerChange}
                            onChange={handleContainerChange}
                            readOnly={!!readonly}
                            border={!readonly && 'solid #3DA9FC'}
                            defaultValue={value} name={id} type={type}/>
            {updateAlert[`${id}`] && <SignUpSpan text ={updateAlert[`${id}`]} />}
        </>
    );
};

export default UpdateInput;