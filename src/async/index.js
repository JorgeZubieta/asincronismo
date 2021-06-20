// se ejecuta primero esta funcion la cual si es correcta y true (resolve), se mostrara el resultado despues de los 3 segundo!
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async!'), 3000)
            : reject(new Error('Async Test Error!'))
    });
}

// llamamos a nuestra function
const doSomething = async() => {
    const Something = await doSomethingAsync()
    console.log(Something);
}

// se ejecuta en orden pero doSomething contiene un await donde vamos a esperar a que esto suceda segun el caso de nuestra promesa, la primer funcnio que acabamos de crear!
console.log('Before!');
doSomething();
// tarda 3 segundos!
console.log('After!');

// agregamos la ruta de este index a package.json!

// para los errores con una segunda fucncion
const errorFunction = async () => {
    try {
        const Something = await doSomethingAsync();
        console.log(Something);
    }
    catch (error) {
        console.error(error);
    }
}
console.log('Before 2!');
errorFunction();
console.log('After 2!');

