import reducer from '../redux/clients';
import expect from 'expect';
import {clients, addclient} from '../getMock';

describe('client reducer', () => {
  
      it('should return the initial state', () => {
        expect(reducer(clients, {})).toEqual(clients);
      });

      it('length of clients should be incremented', () => {
        let state = clients
        let newState = reducer(state, { type: "ADD_CLIENT", payload: addclient})
        expect(newState.length).toBe(3)
      })

      it('should add new client', () => {
        let state = clients
        let newState = reducer(state, { type: "ADD_CLIENT", payload: addclient})
        expect(newState).toEqual([...state, addclient])
      })

});