//Instanciamos la funcionalidad XMLhttprequest para poder usarla en el proyecto
//Implementación de una API con XMLHttpRquest 
// Instanciando el request. 
//Permite hacer peticiones a algun servidor en la nube
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//lo hemos instanciadpo

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


// Aqui vemos como utlizar XMLHttpRequest, la vieja escuela
functionfetchData(url_api, callback) {  //creacion de la funcion pasandole como parametros url_api y un callback 
let xhttp = new XMLHttpRequest(); 
//generar la referecia al objeto que necesito 

xhttp.open('GET', url_api, true); //abrir una url o un llamado a una url usando.open(http request method to use, url_api, indicar si se hace de forma asincrona la funcion) 
xhttp.onreadystatechange = function (event) { //escuchar lo que hace la conexion con la url si sucede algun cambio y se usa una funcion para saber este dato
	
	if(xhttp.readyState === 4) { //se hace la validacion para saber si el resultado en el que se encuentra tu peticion es satisfactoria. Saber si se completo la peticion
		if(xhttp.status === 200) { //Saber el estatus en la que se encuentra la peticion, si bien se completó la peticion, queremos saber si es correcta en el sentido de si encontro el servidor. Necesitamos un 200 
			callback(null, JSON.parse(xhttp.responseText)); //primer valor del callback dentro de node es el error (se deja error en null), luego el resultado del llamado a la Api. Parsear el JSON 
		} else {  //mandar a llamar a error cuando no suceda todo correctamente
			const error = newError('Error' + url_api) //creacion de la constate error la cual genera un objeto error que contiene un string Error y la url de la api
			return callback(error, null) //retornar el collback ahora si pasando el objeto error antes creado para que me lo muestre.
		}
	}
} 
xhttp.send(); //mandar la solicitud con .send() 
} 

// Links y referecias
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open  
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/onreadystatechange
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/parse
