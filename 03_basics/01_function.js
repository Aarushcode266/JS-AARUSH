// functions

function myfriend() {
    console.log("aman"),
    console.log("devansh"),
    console.log("anuj"),
    console.log("mayank"),
    console.log("utsav")

}

myfriend()



function adding(num1, num2) {   // here num1 num2 are called parameters which are passed during function
    // creation

    console.log(num1 + num2)
}

adding(7 , 8) // arguments are passed now on calling of function


adding(7 , "6");

adding(4 , "a");


adding(6 , null)



function addnumbers(n1, n2) {
    let res = n1 +n2;
    return res;

}


console.log(addnumbers(7, 9));

addnumbers(67, 7);

let res = addnumbers(5 , 9);

console.log(res);

// +++++++++++++++++


function islogged(username) {

 return `${username} has successfully logged in`   

}
console.log(islogged("aarushji"))

console.log(islogged())


console.log(islogged(""));





function anotheruser(username) {
    if(username == undefined) {
        console.log("please enter the correct username")
        return ;
    }
    return `${username} has logged in`
}

console.log(anotheruser());

console.log(anotheruser("apiuser"));


function clas(user = "sam") {
    console.log(`${user} has successfully logged in`)
}

clas();


clas("aarush")



