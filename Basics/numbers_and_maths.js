const score = 400;
console.log(score);

const balance = new Number(300);
console.log(balance);
console.log(balance.toFixed(3));
console.log(balance.toString());

let num = 500.887;
console.log(num.toPrecision(3));

let numbers = 1000000000;
console.log(numbers.toLocaleString());    // US
console.log(numbers.toLocaleString('en-IN'));   // Indian 



//MATHS



console.log(Math);

console.log(Math.abs(-67));

console.log(Math.round(5.8));

console.log(Math.ceil(4.2));  // uppar value

console.log(Math.floor(4.9)); // lower value

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));


const min = 15;
const max = 20;

console.log(Math.floor(Math.random()*(max- min+1))+min);