// destructuring of objects

const users = {
    username: "madan",
    id: 99897,
    password: "pandey@123xyz",
    userstitle: "socialworker"
}


const {userstitle} = users;
console.log(userstitle);

const {userstitle: my} = users;
console.log(my);

// about API 
{
    "name": "aarush",
    "coursename":"javascript",
    "price": "free"
}

[
    {},
    {},
    {}
]