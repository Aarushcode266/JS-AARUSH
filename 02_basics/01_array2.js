const marvel_heros = ["ironman", "thor", "blackpanther"];

const dc_heros =  ["superman", "spiderman", "batman"];


 marvel_heros.push(dc_heros);


 console.log(marvel_heros);


console.log(marvel_heros[3][2]);


// concatenation
 const new_heros = marvel_heros.concat(dc_heros);

 console.log(new_heros);

const another_heros = [...marvel_heros, ...dc_heros];
console.log(another_heros); 



// another mehods

const another_array = [4, [5, 9, 7],  8 , [65, 68], 2];

const real_array = another_array.flat(Infinity);

console.log(real_array);


// another prtocedure of array
console.log(Array.isArray("aarush"));

console.log(Array.from("pandey"));

let score1 = 100;
let score2 = 300;
let score4 = 900;


console.log(Array.of(score1, score2, score4));




