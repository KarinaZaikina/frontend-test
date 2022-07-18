export const clients =     
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

  export const addclient =  
{
    name: 'Иван',
    surname: 'Иванов',
    number: '+380685678470',
    gender: 'Мужской',
    email: 'ivanov@gmail.com',
    address: 'Киевская 15',
 }

 export const initialStateAddress = {
    loading: false,
    address: [],
    error: null
  };

 export const address = [
    {
        "title": "Київ (Kiev), Україна",
        "id": "here:cm:namedplace:23689281",
        "resultType": "locality",
        "localityType": "city",
        "address": {
            "label": "Київ, Україна"
        },
        "position": {
            "lat": 50.45056,
            "lng": 30.52428
        },
        "distance": 1204021,
        "mapView": {
            "west": 30.23944,
            "south": 50.21323,
            "east": 30.82689,
            "north": 50.59104
        },
        "highlights": {
            "title": [
                {
                    "start": 6,
                    "end": 10
                }
            ],
            "address": {
                "label": []
            }
        }
    },
    {
        "title": "Київська область (Região de Kiev), Україна",
        "id": "here:cm:namedplace:23677299",
        "resultType": "administrativeArea",
        "administrativeAreaType": "county",
        "address": {
            "label": "Київська область, Україна"
        },
        "position": {
            "lat": 50.29949,
            "lng": 30.45752
        },
        "distance": 1204716,
        "mapView": {
            "west": 29.26955,
            "south": 49.17936,
            "east": 32.16383,
            "north": 51.53149
        },
        "highlights": {
            "title": [],
            "address": {
                "label": []
            }
        }
    }
]

