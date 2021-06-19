//Instanciamos la funcionalidad XMLhttprequest para poder usarla en el proyecto
//Implementación de una API con XMLHttpRquest 
// Instanciando el request. 
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//lo hemos instanciadpo


// esta sentencia es para la 2nda parte!
let api = 'https://rickandmortyapi.com/api/character/';
// direccion de la API


function fetchData(url_api, callback){ //le pasamos a la funcnion dos valores, url a utilizar y un call bacl
	let xhttp = new XMLHttpRequest(); //generamos la referencia al objeto xhttp (shorcut = atajo) que es = a un new a la instancia que acabamos de taer. 
        
	// abrimos una url o llamamos una url, SEND A REQUEST TO A SERVER!
    // Anuestra referencia xhttp le pasamos un LLAMADO 'open' donde: parametro1 = el metodo "GET", parametro2 = la url a ser llamada/consulatda, parametro3 = verificación si es asincrono o no, valor por defecto true
    xhttp.open('GET', url_api, true); //Cuando el estado del objeto cambia, se ejecuta la función siguiente: 
	
    
    // PD: recuerda estas trabajando con una API externa osea un servidor, por lo que depende del servidor cuanto mas demore en cada estado, se hace un RECUEST (pedido por datos y solo es aplicar lógica.
    xhttp.onreadystatechange = function (event){ // esta funcion recibe un evento, no siempre se usa pero es una buena practica establecerlo dandome ahora un espacio entre {} para validar!

        // Validamos el estado a ver si voy a ejecutar mi call back, si la conexion  fue exitosa por emdio de que se cumplan do if!
        if(xhttp.readyState === 4){ // aca validamos el estado con una triple igualdad ===  porque compara un valor numerico con otro numerico!
        // Cinco estados a continuacion!
        // 0: solicitud no inicializada (todavia no se llama open). 
        // 1: conexión al servidor establecida (se esta cargando, donde se esta haciendo el proceso de hacer el llamado) Indica que la petición esta siendo procesada!
        // 2: solicitud recibida (ya se ha cargado) Indica que la petición fue recibida, aceptada y procesada correctamente.
        // 3: solicitud de procesamiento (si hay una descarga o informacion) Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
        // 4: solicitud finalizada y respuesta lista (se ha completado) Errores del lado de l cliente. Indica se hizo mal la solicitud de datos. ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución.        
            
            if(xhttp.status === 200){ // aca validamos el status con una triple igualdad === a 200 que significa que esta todo bien "OK" segun la tabla! entonces puedo regresar mi call back!
                    //Estandar de node con callbacks, primer parametro error, segundo el resultado pero empezamos mandando un null y parceamos el resultado de la API!
                    callback(null, JSON.parse(xhttp.responseText));
            } else { 
                    const error = new Error('Error ' + url_api);
                    return callback(error, null)
            } 
        } 
    }
    xhttp.send(); //Envio de la solicitud.
}

// ----------------2nd PARTE----------------------------

// primero buscamos la lista de personajes
fetchData(api, function(error1, data1) {
    // si error, matamos retornando un error
    if(error1) return console.error(error1);
    // luego buscamos en la api el id de Rick 
        fetchData(api + data1.results[0].id, function (error2, data2) { 
        //peticiona la AIP de la cantidad de personasjes, campo count
        
        if(error2) return console.error(error2);
        // si error, matamos retornando un error

            // por ultimo la consulta a la api que contiene su dimension
            fetchData(data2.origin.url, function(error3, data3) {
            // si error, matamos retornando un error
                if(error3) return console.error(error3);
                    // mostramos los resultados :) 
                    console.log(data1.info.count);
                    console.log(data2.name);
                    console.log(data3.dimension);
            });
        })
});
// agregamos este challenge al scripts en el package.JSON!!!
// Asi lo podemos ejecutar desde terminal