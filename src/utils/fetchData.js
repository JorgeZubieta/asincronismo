//Instanciamos la funcionalidad XMLhttprequest para poder usarla en el proyecto
//Implementación de una API con XMLHttpRquest 
// Instanciando el request. 
//Permite hacer peticiones a algun servidor en la nube

// modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// necesitamos xml porque seguimos trabajando con node!

// a continuacion los camvbios (trasnformacion)

// function fetchData(url_api, callback) { 
const fetchData = ((url_api) => {
    // como cambio a funcion debo pasarle valores estrucutra de fetch!
    return new Promise((resolve, reject) => {
        //------BLOQUE MOVIDO MAS CAMBIOS-------
        // let xhttp = new XMLHttpRequest(); 
        const xhttp = new XMLHttpRequest(); 
        // instanciamos la conexion

        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                // if(xhttp.status === 200){
                //         callback(null, JSON.parse(xhttp.responseText));
                // } else { 
                //         const error = new Error('Error ' + url_api);
                //         return callback(error, null)
                // }  
                (xhttp.status === 200)
                    // si esta en 200
                    ? resolve(JSON.parse(xhttp.responseText))
                    // si no esta en 200
                    : reject(new Error('Error' + url_api))
            }
        }); 
        xhttp.send(); //Envio de la solicitud.
    });
        //------BLOQUE MOVIDO MAS CAMBIOS-------
});
    
//------BLOQUE SE SE MOVERA DENTRO DE LA PROMESA-------
//     let xhttp = new XMLHttpRequest(); 
//     xhttp.open('GET', url_api, true);
//     xhttp.onreadystatechange = function (event){
//         if(xhttp.readyState === 4){ // aca validamos el estado con una triple igualdad ===  porque compara un valor numerico con otro numerico!
            
//             if(xhttp.status === 200){ // aca validamos el status con una triple igualdad === a 200 que significa que esta todo bien "OK" segun la tabla! entonces puedo regresar mi call back!
//                     callback(null, JSON.parse(xhttp.responseText));
//             } else { 
//                     const error = new Error('Error ' + url_api);
//                     return callback(error, null)
//             } 
//         } 
//     }
//     xhttp.send(); //Envio de la solicitud.
// }
//------BLOQUE SE SE MOVERA DENTRO DE LA PROMESA-------


// Y para terminar vamos a Exportar fetchData
module.exports = fetchData;
// NOTA 1 : utilizamos module exports porque utlizo NODE y node lo utliza como un js y no utiliza la sintaxis de hacer el import o el export defaul, tenerlo en cuenta!
// NOTA 2 : ahora puedo utilizar fetchData dentro chanllenge!!!


// NO SE NECESITA LA SEGUNDA PARTE!!!!!!!!!!!!!!!
// // ----------------2nd PARTE----------------------------

// fetchData(api, function(error1, data1) {
//     if(error1) return console.error(error1);
//         fetchData(api + data1.results[0].id, function (error2, data2) { 
        
//         if(error2) return console.error(error2);
//             fetchData(data2.origin.url, function(error3, data3) {
//                 if(error3) return console.error(error3);
//                     // mostramos los resultados :) 
//                     console.log(data1.info.count);
//                     console.log(data2.name);
//                     console.log(data3.dimension);
//             });
//         })
// });