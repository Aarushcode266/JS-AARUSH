// arrays in javascript
const array = [0, 1, 3, 5, 6];

console.log(array[1]);

const arr =  new Array(5, 7, 6, 7);

const anotherarr = ["ironman", "shaktimaan", "superman"];

console.log(typeof arr);


array.push(9);
console.log(array);
array.push(7);

console.log(array);

array.pop();
console.log(array);

// shift and unshift

array.unshift(56);
console.log(array);

array.shift();
console.log(array);

console.log(array.includes(6));

console.log(array.indexOf(5));

const newarray = array.join();

console.log(array);
console.log(newarray);
console.log(typeof newarray);

// slice and splice

console.log(array);


// effect of slice operation
const myn1 = array.slice(1,3);
console.log(myn1);
console.log("A ", array);


// effect of splice operation

const my2 =  array.splice(1 , 3);
console.log(my2);

console.log("B" , array);