const score = 400;
console.log(score);

const another = new Number(600);
console.log(another);

console.log(another.toString().length);
console.log(another.toFixed(3));



const otherName = 123.8966

console.log(otherName.toPrecision(3));
console.log(otherName.toPrecision(2));



const my = 1000000;
console.log(my.toLocaleString());

// ++++++++++ maths of javascript
console.log(Math.abs(-9)); // it is the absolute value of math in javascript
console.log(Math.ceil(5.4));
console.log(Math.floor(5.4))
console.log(Math.round(5.4));


console.log(Math.max(45, 8, 9 , 15));
console.log(Math.min(13, 8, 0 , 78));


console.log(Math.random())// math.random value always lie between 0 and 1



console.log((Math.random() * 10)  + 1)
console.log(Math.floor((Math.random() * 10)  + 1));


const max = 20;
const min = 10;

console.log((Math.random()*(max - min + 1)) + min)

