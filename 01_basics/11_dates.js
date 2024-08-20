// Date
const mydate = new Date();


console.log(mydate.toString());


console.log(mydate.toDateString());

console.log(mydate.toISOString());


console.log(mydate.toJSON());

console.log(mydate.toLocaleDateString());


console.log(mydate.toLocaleString())

console.log(typeof mydate);


const createddate = new Date(2023 , 11, 8);

console.log(createddate.toString());



console.log(createddate.toDateString());


const created = new Date(2023 , 11, 8, 5, 2);

console.log(created.toLocaleString());
console.log(created.toLocaleDateString());


// some other formats of representing dates


const anotherdate = new Date("2023-11-23");
console.log(anotherdate.toLocaleDateString());
const each = new Date("11-5-2022")
console.log(each.toLocaleDateString());



let mytimestamp = Date.now();
console.log(mytimestamp);


console.log(created.getTime()); // 1724130651256the time is in miliseconds




console.log(Math.floor(Date.now()/1000)) // this is the time in seconds


console.log(Math.floor((created.getTime()/1000))); // another time of created date in seconds



const newdate = new Date();
console.log(newdate);

newdate.toLocaleString( 'default' , {
    weekday:"long"


})










