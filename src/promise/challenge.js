// lo primero que se tiene que hacer es hacer un require de fechtData!
const fetchData = require('../utils/fetchData');
// con lo dos puntos ../ me muevo una posicion atraz de la carptea que estoy en este caso de promise a src!

// vamos a la API
const API = 'https://rickandmortyapi.com/api/character/';

// A continuacion vamos a resolver el challenge de las 3 peticiones! lo resolvemos con las promesas
fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
        // NOTA: cuidado con las comillas en diagonal!
    })
    .then(data => {
        console.log(data.name)
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(err => console.error(err));

// Ahora estamos listos para correr el programa!!
// Y previamente debemos crear el script dentro de json!







