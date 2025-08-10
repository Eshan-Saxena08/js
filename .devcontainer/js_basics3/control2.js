//using if we can check if we have input

const userEmail = "sDiljoijpojd"//got from DB
//if userEmail = "" => prints dint get email

//if userEmail = [] => prints got email


if(userEmail){//checks if any value available in the variable
    console.log("got email");
}else{
    console.log("didnt get email")
}

//falsey values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

//any value inside string makes it a truthy value

//array empty
const emptyarr = []
if(emptyarr.length ===0){
    console.log("empty");
}
const emptyobj = {}
if(Object.keys(emptyobj).length ===0){
    console.log("empty");
}

//nullish Coalescing operator (??): null undefined

let val1;//we can use 3 vales also 
val1 = 5 ?? 10//prints 5 because it is first


val2 = null ??10//prints 10 

//Terniary op

//condition ? true:false

const price = 100
price>=80 ? console.log("less than 80"): console.log("more")