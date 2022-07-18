import {combineReducers} from 'redux'
import clients from './clients';
import getaddress from './getaddress';

export const rootReducer = combineReducers({clients,getaddress})
