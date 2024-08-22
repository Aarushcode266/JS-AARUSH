// singleton


// object.create


// object litearls





// USING SYMBOL AS A KEY IN OBJECT
const mykey = Symbol("key1");

const USER1 = {
    name: "aarush",
     


    [mykey] : "mykey11",
    "FULLNAME": "AARUSH PANDEY",
    age: 20,
    email: "pandey@1234.gmail.com",
    isLoggedIn: false,
    previouslogged: ["saturday", "sunday"] 


}

console.log(USER1.name);
console.log(USER1.age);


console.log(USER1[mykey]);
console.log(typeof USER1[mykey]);

console.log(USER1["AGE"]);


console.log(USER1["FULLNAME"]);

USER1.email = "pandey@12345.gmmm";


console.log(USER1);


// Object.freeze(USER1);


USER1.email = "ap1058743@gmail.com";

console.log(USER1);
// functions in javascript

USER1.greeting = function() {


    console.log("hello how are you developers");

}


console.log(USER1.greeting);
console.log(USER1.greeting());

// always remember we maximum time access the elemnts using dot operators but some time we have 
// use the square barackets []  for accessing the elements


// another unction

USER1.greetingtwo = function() {
    console.log(`how are doing imnn life   , ${this.FULLNAME}`)
}


console.log(USER1.greetingtwo());




