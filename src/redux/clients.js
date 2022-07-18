 const initialState =     
[{
    name: 'Иван',
    surname: 'Иванов',
    number: '+380685678470',
    gender: 'Мужской',
    email: 'ivanov@gmail.com',
    address: 'Киевская 15',
 },
 {
     name: 'Петр',
     surname: 'Петров',
     number: '+380938769400',
     gender: 'Мужской',
     email: 'petrov@gmail.com',
     address: 'Софиевская 22',
  }]
  

export default function clients(state = initialState, {type,payload}) {
    switch (type) {
        case "ADD_CLIENT":
            return [...state, payload]
        default:
            return state;
    }
}