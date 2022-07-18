import { render, screen } from '@testing-library/react';
import { createStore } from 'redux'
import {Provider} from "react-redux";
import { rootReducer } from '../redux'
import RegisterForm from './RegisterForm';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component, {getaddress,store=createStore(rootReducer,getaddress)}
) => {
  return {...render(<Provider store={store}>{component}</Provider>),store,}
};

describe("RegisterForm",()=>{
 it("render RegisterForm component",async () => {
  renderWithRedux(<RegisterForm/>,{initialState:{loading: false,address: [],error: null }});
  
  expect(await screen.findByLabelText('Имя')).toBeInTheDocument() ;  
  expect(await screen.findByLabelText('Фамилия')).toBeInTheDocument() ;  
  expect(await screen.findByLabelText('Номер телефона')).toBeInTheDocument() ;
  expect(await screen.findByLabelText('Email')).toBeInTheDocument() ; 
  expect(await screen.getByRole("combobox")).toBeInTheDocument() ;

  expect(await screen.findByLabelText('Номер телефона')).not.toBeRequired() ; 

  userEvent.type(await screen.findByLabelText('Имя'), "Александр");
  userEvent.type(await screen.findByLabelText('Фамилия'), "Семенов");
  userEvent.type(await screen.findByLabelText('Номер телефона'), "0685748392");
  userEvent.type(await screen.findByLabelText('Email'), "alex@gmail.com");
  userEvent.selectOptions(await screen.getByRole("combobox"), "Мужской");

  const checkbox = await screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked() ;
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked() ;

 })
})
