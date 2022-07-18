import React from "react";
import { useForm } from "react-hook-form";
import TextBox from "./Fields/TextBox";
import Select from "./Fields/Select";
import CheckBox from "./Fields/CheckBox";
import styled from 'styled-components'
import axios from 'axios';
import { shallowEqual, useDispatch,useSelector } from 'react-redux'


const Form = styled.form`
        border: 1px solid black;
        width: 50vw;
        padding: 10px;
        margin: 0 auto;
        `
const Section = styled.section`
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
`

const Box = styled.div`
        margin: 10px;
        `

const Title = styled.h1`
        margin: 20px 10px;
        `

const Button = styled.button`
        background-color: #555555; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 0 20px 10px 20px;

        &:hover {
            background-color: #888;
            cursor: pointer;
        `

const RegisterForm = () => {
    const address = useSelector(state => state.getaddress, shallowEqual)
    const dispatch = useDispatch(); 

    const getAddress = (req) => {
        return dispatch => {
          dispatch({type: "GET_ADDRESS_STARTED"});
          if (req.length !== 0) 
            axios
            .get(`https://autosuggest.search.hereapi.com/v1/autosuggest?at=52.5228,13.4124&q=${req}&apiKey=GWhJPMH3Qv4560Z6yPIO0qsnlElFYQkn9gafiMVBLTI`)
                .then(res => {
                dispatch({
                    type: "GET_ADDRESS_SUCCESS",
                    payload: res.data.items
                });
                })
                .catch(err => {
                dispatch({
                    type: "GET_ADDRESS_FAILURE",
                    payload: err
                });
                });
          else 
            dispatch({
                type: "GET_ADDRESS_SUCCESS",
                payload: []
            });

        };
    };

    const AddressChange = (e) => {
       dispatch(getAddress(e.target.value))
    }

    const { register, handleSubmit, formState: { errors }, reset } = useForm({});

    const handleRegistration = (data) => {
        dispatch({ type: "ADD_CLIENT", payload: data})
        reset({
            name: '',
            surname: '',
            number: '',
            gender: 'Мужской',
            email: '',
            address: '',
         });
         dispatch(getAddress(''))
    }

    const handleError = (errors) => {};
  
    const registerOptions = {
      name: { required: "Имя обязательно для заполнения" },
      surname: { required: "Фамилия обязательно для заполнения" },    
      number: { required: "Номер телефона обязательно для заполнения"},
      email: {  required: "Email обязательно для заполнения",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Невалидный email адрес"
                } },       
      address: { required: "Адрес обязательно для заполнения" },        
      usedata: { required: "Подтверждение обязательно для заполнения" },
    };
  
  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <Title>Форма регистрации</Title>
        <Section>
        <Box>
            <TextBox
                title={'Имя'}
                name={'name'}
                type={'text'}
                register={register}
                registerOption={registerOptions.name}
                errors={errors.name}
            />
        </Box>
        <Box>
            <TextBox
                title={'Фамилия'}
                name={'surname'}
                type={'text'}
                register={register}
                registerOption={registerOptions.surname}
                errors={errors.surname}
            />
        </Box>
        <Box>
            <TextBox
                title={'Номер телефона'}
                name={'number'}
                type={'number'}
                register={register}            
                registerOption={registerOptions.number}
                errors={errors.number}
            />
        </Box>
        <Box>
            <TextBox
                title={'Email'}
                name={'email'}
                type={'text'}
                register={register}
                registerOption={registerOptions.email}
                errors={errors.email}
            />
        </Box>
        <Box>
            <Select 
                title={'Пол'}
                name={"gender"} 
                register={register}
                registerOption={registerOptions.gender}
                options={["Мужской", "Женский"]} />
        </Box>
        <Box>
            <TextBox
                title={'Адрес'}
                name={'address'}
                type={'text'}
                register={register}
                registerOption={registerOptions.address}
                errors={errors.address}
                custOnInput={AddressChange}
            />
        </Box>
        {address && Array.isArray(address.address) && <div> 
            {address.address.map((el, idx) => <div key={idx} data-testid="list-address">{el.address && el.address.label ? el.address.label : null }</div>)}   
         </div>
        }
        {address && address.loading && <div> 
            Загрузка...   
         </div>
        }
        <Box>
            <CheckBox
                title={'Подтверждение использования данных'}
                name={'usedata'}
                type={'checkbox'}
                register={register}
                registerOption={registerOptions.usedata}
                errors={errors.usedata}
            />
        </Box>
        <Button>Зарегистрироваться</Button>
        </Section>
  </Form>
  );
}

export default RegisterForm;