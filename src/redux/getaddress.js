  const initialState = {
    loading: false,
    address: [],
    error: null
  };
  
  export default function getaddress(state = initialState, {type,payload}) {
    switch (type) {
      case "GET_ADDRESS_STARTED":
        return {
          ...state,
          loading: true
        };
      case "GET_ADDRESS_SUCCESS":
        return {
          ...state,
          loading: false,
          error: null,
          address: payload
        };
      case "GET_ADDRESS_FAILURE":
        return {
          ...state,
          loading: false,
          error: payload.error
        };
      default:
        return state;
    }
  }