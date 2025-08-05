let score = "33"

console.log(typeof score)

let StringinNumber = Number(score)//typecast
console.log(typeof StringinNumber)
//but if score is "33abc" it will be converted but when print is NaN

let score2 = "33abc"
let convert = Number(score2)
console.log(convert)//prints NaN

//for null value = 0
//true = 1 and false = 0

//************operations ********************

let value = 3
let negvalue = -value
console.log(negvalue)//gives -3
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);//power
console.log(2/2);
console.log(2%2);//remainder

let str1 = "hello"
let str2 = "eshan"

let str3 = str1 + str2
console.log(str3); //prints hello eshan
console.log("1" + 2);//gives 12
console.log(1 + "2");//gives 12
console.log("1" + 2 + 2)//gives 122
console.log(2 + 2 + "1")//gives 32 
console.log(+true);//gives 1
console.log(+"");//gives 0



