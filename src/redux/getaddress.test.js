import reducer from '../redux/getaddress';
import expect from 'expect';
import {address, initialStateAddress} from '../getMock';

describe('address reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(initialStateAddress, {})).toEqual(initialStateAddress);
      });
    
      it('should handle GET_ADDRESS_STARTED', () => {
        let state = initialStateAddress
        const startAction = {
            type: "GET_ADDRESS_STARTED"
        };
        
        expect(reducer(state, startAction)).toEqual({...state, loading: true });
      });
    
      it('should handle GET_ADDRESS_SUCCESS', () => {
        let state = initialStateAddress
        const successAction = {
          type: "GET_ADDRESS_SUCCESS",
          payload: address, 
        };
        expect(reducer(state, successAction)).toEqual({...state, loading: false, error: null, address });
      });
    
      it('should handle GET_ADDRESS_FAILURE', () => {
        let state = initialStateAddress
        const failAction = {
            type: "GET_ADDRESS_FAILURE",
            payload: 'error'
        };
        expect(reducer(state, failAction)).toEqual({...state, loading: false, error: 'error'.error });
      });

});