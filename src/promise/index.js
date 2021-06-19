// A partir de ahora voy a utilizar Es6 para crear la estructurra de una promesa (funcion)!

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
// Rompermos el codigo para que caiga en el error! cambiando el valor false del if!!!
            resolve('Hey Guys daddy miss you so much!');
        }
            else {
                reject('Whooops! Sorry and also i love you guys!');
            }
    });
};

// Procedemos a ejecutar la promesa!
somethingWillHappen ()
// tengo dos elementos encadenados response y cath para mostrarlo en la consola!
    .then(Response => console.log(Response))
    .catch(err => console.error(err));
// procedemos a crear nuestro scrip en package.json oara poder correr este codigo que acabamos de crear.



// -------Ejemplo 2------- 
// Promise. Nueva promesa para ver la parte del tiempo!
// tener en cuenta que al erro typo "P" para escribir Promise y no el error "promise"!
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('Is true, forever i will love you guys, Daddy!');                
            }, 5000);
        } else {
            const error = new Error('WhooooooOps... Error!');
            reject(error);
        }
    });    
}
// Procedemos a ejecutar la nerw promeise!
somethingWillHappen2()
    .then(Response => console.log(Response))
    // puedo realizar encadenamietos de acciones por ejemplo, despues del primer then!
    .then(() => console.log('----------------------------------'))
    .then(() => console.log('seTimout : Solucion en 5 segundos!'))
    .then(() => console.log('----------------------------------'))
    .catch(err => console.error(err))
    // mostrara los detalles la ruta de lo que sucedio en el error