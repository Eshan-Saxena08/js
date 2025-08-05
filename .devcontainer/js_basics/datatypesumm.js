//primitive : 7 types
//string,Number,Boolean,null,undefined,Symbol(makes a value unique),BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)//both will have diff values as they are unique cause of Symbol()

const bigNumber = 34141434141413419n //n makes it bigint

//references (Non primitive)
//Array,Objects,Functions

const heros = ["superman","ironman","thor"]; //this is array

let myObj = { //every thing inside {} is objects
    name: "hitesh",
    age: 22,
}
const myfunc = function(){ // use of function
    console.log("Hello WOrld");
}

