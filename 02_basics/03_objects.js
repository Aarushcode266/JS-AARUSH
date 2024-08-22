// declearing singleton objects
// using constructor

const myobj = new Object();


// another way of declearing objects

const tinder =  {}

tinder.id = "2023021203"

tinder.password = "email855"

console.log(tinder);



// merging of objects
const us1 = {1: "a", 2: "b"};
const us2 = {3: "c",  4: "d"};
const obj3 = Object.assign(us1 , us2);

console.log(obj3);
const us3 = {5: "e",  6: "f"};


const obj4 = Object.assign({} , us1 ,us2, us3);

console.log(obj4);


const obj5 = {...us1 , ...us2, ...us3}
console.log(obj5);




// +++++++++++++++++--------


const anotherobj = {
    name:{
        username:{
            firstname:"aarush",
            lastname: "pandey"
        }
    }
} 



console.log(anotherobj.name.username.lastname);




// ++++++++++++++ _________________


console.log(tinder);



console.log(Object.values(tinder));

console.log(Object.keys(tinder));

console.log(Object.entries(tinder));


console.log(tinder.hasOwnProperty('password'));






