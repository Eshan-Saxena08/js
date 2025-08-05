console.log(2 > 1);//output in boolean

//problem arised when same data types are not compared

console.log("2" > 1);//gives true

console.log(null > 0);//converts to 0
console.log(null == 0);//== & > , < works differently
console.log(null >= 0);//converts to 0
//above values are converted incorrectly so it doesnt give predicted results

//comparison and equalitu check are diff
console.log("2" === 2)//strict check it checks the data type