import { render, screen } from '@testing-library/react';
import { createStore } from 'redux'
import {Provider} from "react-redux";
import { rootReducer } from './redux'
import {mockClients} from './getMock';
import App from './App';

const initialState = mockClients;

const renderWithRedux = (
  component, {clients,store=createStore(rootReducer,clients)}
) => {
  return {...render(<Provider store={store}>{component}</Provider>),store,}
};

describe("App",()=>{
 it("render App component",()=>{

   renderWithRedux(<App />,{initialState});
   expect(screen.getByRole('checkbox')).toBeInTheDocument() ; 
   expect(screen.getByRole('button')).toBeInTheDocument() ; 
 })

})
