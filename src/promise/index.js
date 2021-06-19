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

