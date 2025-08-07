//IIFE

//some functions are req to be invoked immedtiately eg DB linking

//an expression is any valid peace of code that produces an output

//food is named iife
(function food(){//wrapping function inside () makes it an expression
    console.log(`DB CONNECTED`);
})();//; is given to end iife IMPORTANT 


//first() is to define function and () is for exec

//iife is use to remove global scope pollution

//Global scope pollution happens when too many variables, functions, or objects are declared in the global scope, Name conflicts:Unexpected behavior,Hard-to-maintain 

//using arrow
( (name) =>{//unamed iife
    console.log(`DB connected ${name}`)
})('es')