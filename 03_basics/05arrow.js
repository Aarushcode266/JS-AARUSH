const user = {
     name: "aarushpandey",

     age: 20,

     message: function() {
        console.log(` developer is ${user.name} and he is ${user.age} old `);

        console.log(this);
     }




}


user.message();

user.name = "java";
user.message();

console.log(this); // in node engine of javascript object is empty

// while in browser the object is window



function chai() {
     let username = "madan"
     
     console.log(this);

}
chai();



function chai() {
    let anotheruser = "pandey"          
                                    // this cannot be operated in function
                                    // it can only be operated in object
                                    //  

console.log(this.anotheruser);

}







const ch = function() {
    let anotheuser = "pandey"

    console.log(this.anotheruser)
}



// ++++++++++++++++++= ARROW FUNCTION PE CHARCHA++++++++++++




const user5 = ()=> {
    

    const username = "csedepartment"
                                         // output is undefined
       console.log(this.username);

}






const user6 = ()=> {
    

    const username = "csedepartment"
                                         // output is {} empty object
       console.log(this);

}

// 



const ano1 = (num1,  num2 ) => {

return num1 + num2;



}
console.log(ano1(6, 9));



//


const ano2 = (num1 , num2) => num1 + num2


console.log(ano2(4 , 7));


    //  


const ano3 = (num1 , num2) => (num1 + num2)


console.log(ano3(6, 7));

//

const ano4 = (num1 , num2) => ({username: "aarush"})


console.log(ano4(6, 8));









