// const sum = (a,b) => {
    // return a+b
// }

// console.log(sum(7,3));

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar (valorenEuro){
    let valorenDolar = valorenEuro * oneEuroIs.USD;
    return valorenDolar;
}


function fromDollarToYen (valorenDolar){
    let euroDolar = valorenDolar *(1/oneEuroIs.USD);
    let yen = euroDolar * oneEuroIs.JPY;
    
    return yen;
}
function fromYenToPound (valorenYen){
    let yenpound = valorenYen *(1/oneEuroIs.GBP);
    let pound = yenpound * oneEuroIs.JPY;
    return pound;
    }


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
