// stack memory and heap memory 


// stack is(primitive type) while heap is (non-primitive)


let myyoutubename = "gangester";
let anothername = myyoutubename;


console.log(anothername);

console.log(myyoutubename);
anothername = "gangterpride";

console.log(anothername);


console.log(myyoutubename);



// uppere qas the example of stack memory primitive data types which only return the copy 




let myobj = {
    name: "aarush",
    age: 20,
    rollno: 2023021202
}

let user2 = myobj;
myobj.name = "pandey";
console.log(myobj.name);
console.log(user2);
console.log(myobj);

// in case of non-primitive we only get the reference of a value



