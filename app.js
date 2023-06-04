// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
function yenToPound(amountInYen) {
    let oneEuroIs = {
      "JPY": 127.9, // japan yen
      "USD": 1.2, // us dollar
      "GBP": 0.8, // british pound
    };
  
    // Convert yen to euro
    let amountInEuro = amountInYen / oneEuroIs["JPY"];
  
    // Convert euro to pound
    let amountInPound = amountInEuro * oneEuroIs["GBP"];
  
    return amountInPound;
  }

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(14,9))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}



const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 127.9;
    return valueInYen;
}


const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.8;
    return valueInPound;

}

module.exports = {fromEuroToDollar,fromDollarToYen, fromYenToPound}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }

