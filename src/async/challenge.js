// fetchData  hara la peticion
const fetchData = require('../utils/fetchData')
const API = 'https://rickandmortyapi.com/api/character/'
// API va en mayuscula porque tenemos la convencion de que no va a mover ni cambiar su nombre se establezca con mayusculas.

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    }
    catch (error) {
        console.error(error);
    }
}

console.log('Before');
anotherFunction(API);
console.log('After');

// agregamos el script en el json!