// primitive datatypes
// there are 7 primitive datatypes 1.String, 2. Number, 3. Bigint, 4.null, 5.undefined
//6.Symbol, 7.Boolean 



let id = Symbol('1234');
let another =Symbol('1234');

let Bignumber = 124356785868777n;

console.log(id == another);

// non-primitive dtatypes
// these are object , function,   array


let arr = ["devansh", "amansonwani", "anujsingh" , "aarushpandey"];
// https://262.ecma-international.org/5.1/#sec-11.4.3



console.log(arr);



let myobj = {
    age: 20,
    name: "aarush",
    password:"@123"
};
let myfunction = function() {
    console.log("helloworld");
}