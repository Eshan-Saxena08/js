//const myArr = [0,1,2,3,4,5,true,"eshan"] is also possible
//can be resized also


const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(0,1,2,3,4,5)//both are same just this is created using Array method


//Array methods

myArr.push(6)
myArr.pop()//removes the last pushed value in array

myArr.unshift(9)//adds 9 to first index and shifts the rest values right
myArr.shift()//same as pop removes 9 and shifts values left

console.log(myArr.includes(9));//output is boolean
console.log(myArr.indexOf(3));//gives index of 3 in Array

const newArr = myArr.join()//converts array to string

//slice,splice
const myn1 = myArr.slice(1,3)//doesnt include end range ,original array remains same
console.log(myArr);

const myn2 = myArr.splice(1,3)//gives end range and removes the spliced elem from original array .....manipulates array
console.log(myn2)