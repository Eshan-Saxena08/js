//to filter some elements out from list

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newNums = mynums.filter((num) => num>4)
//or
/*const newNums = mynums.filter(num) => {
    return num >4
    }) */

    //for-eah

const newarr = []
mynums.forEach( (nums) => {
    if(num > 4){
        newarr.push(num)
    }
})
console.log(newarr);
console.log(newNums);

const elem = [1,2,3,4,5,6,7,8,9]
const newelem = elem.map((num) => num +10)//if curly then return orelese it returns by itself

//chaining

const newelems = elem.map((num) => num * 10).map( (num) => num + 1).filter( () => num >= 40)//executes in order