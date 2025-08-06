 //singleton: object created with constructor i.e. only 1 instance
//object.create => singleton

 //object literals creates more than one instance

 const mySym = Symbol("key1")
 
 //if we directly use symbol in object its type will be string


 const EShan = {
    name: "Eshan",
    age : 18,
    location : "Odisha",
    [mySym] : "mykey1",
    email:"xyz@gmail.com",
    isLoggedIn : false,
    LastLogin: ["Monday","Saturday"]
 }//object created using literal


//to access objects

console.log(EShan.email)
console.log(EShan["email"])//mostly used as in the array more objects can be accessed
//and also if object has space in btw it cannot be accessed using "."
console.log(EShan[mySym])//no need to put inside""


//to change

EShan.email = "eshan@gmail.com"

//Object.freeze(EShan)//no object can be changed now

EShan.greeting = function(){
    console.log("Hello JS user");
}
console.log(EShan.greeting);//returns a reference to function and not the greeting

EShan.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(EShan.greeting2());