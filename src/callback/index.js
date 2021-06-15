function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1,num2);
}

console.log(calc(2,2, sum));

// 1ra funcion que se ejecuta
function date(callback) {
    console.log(new Date);

    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 3000)

}

// 2nd funcion que imprime esos valors
function printDate(dateNow) {
    console.log(dateNow);
}

date(printDate);