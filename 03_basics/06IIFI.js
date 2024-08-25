// immediately invoked function expressions(IIFI)


// iifi is used so that variables cannot be pollute with global scope


(function chai() {

console.log(`how are you brother`);

}



)(); // here semicolon is used to stop the function till vthat particular function
// so that it furthur can't be proceed



( (name) => {


console.log(`this is my ${name}`)

})("codespace");
