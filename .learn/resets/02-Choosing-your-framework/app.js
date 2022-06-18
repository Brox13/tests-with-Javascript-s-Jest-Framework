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

function fronDollarToYen (valorenDolar){
    let valorenYen = valorenDolar * oneEuroIs.JPY;
}

function 
