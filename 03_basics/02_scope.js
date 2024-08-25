let a = 10;
const b = 40;
var x = 90;

                  // var keyword does not support block scope 
console.log(a);
console.log(b);
console.log(x);





let c = 700;
var d  = 800;
if(true) {
    let c = 6;
    let m = 30;
    var d = 12;


    console.log("INNER :", c);
}

console.log(d);
// console.log(c); here c is not defined it is in block scope
// console.log(m); here m is not defined it is in block scope

console.log(c);



