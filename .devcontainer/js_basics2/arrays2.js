const heroes = ["thor","hulk","ant"]
const dchero = ["flash","bat","super"]

heroes.push(dchero)//doesnt combine array but creates another array inside the original array 2nd array becomes like an element
console.log(heroes);

//to concat ... it combines both and creates a new combined array

const allhero = heroes.concat(dchero);
console.log(allhero);

//       OR

const allnewhero = [...heroes,...dchero]//seperates each elem of the array and displays same as concat

const arrayrubbish = [1,2,[3,4],5,6,[7,8,[9,10]]]
const realarray = arrayrubbish.flat(Infinity)//if array inside array it removes all elems of array inside array and combines into one array with all elems

//inside flat the depth is defined

//to create array from char
console.log(Array.from("EShan"))
console.log(Array.from({name: "hitesh"}))//cannot directly convert it ...the output is empty array


//to combine many values to array
let s1 = 100
let s2 = 200
let s3 = 300
let s4 = 400
console.log(Array.of(s1,s2,s3,s4))//returns an array combined of set of elements