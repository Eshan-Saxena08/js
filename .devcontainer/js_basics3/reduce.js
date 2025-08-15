//in the callback values the paramter is (accumulator,currentValue) => accumulator + current value,initialvalue)
//intial value is taken which is saved in accumulator and current value are the elems from the list

const mynums = [1,2,3]//currval is each elem of arr

const mytotal = mynums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval : ${currval}`);
    return acc + currval

    //or
    const mytot = mynums.reduceRight((acc,currval)=> acc+currval,0)

},0)//initial value of acc
console.log(mytotal);