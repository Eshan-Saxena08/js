//for of
const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello"
for(const geet of greetings){
    console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()//map is object holds key value pair in "order",no duplicates
map.set('IN',91);
map.set('US',34)
console.log(map);

for(const [key,value] of map){//to get seperate key and value pair values
    console.log(key,':-',value);
}
const myobj = {//normal for each doesnt work,for in works in obj
    'game1': 'gta',
    'game2':'val'
}
// ******for-in*********

for(const key in myobj){
    console.log(myobj.key);
}

const lang = ['js','c']

for(const key in lang){
    console.log(lang[key]);//prints all the values
}

//doesnt work for map

// ************for-each*******
const arr2 =[1,2,3,4]
arr2.forEach(function(item){
    console.log(item);
})
arr2.forEach((item) =>{
    console.log(item);
})

//coding.forEach(printme) // we can pass some function with other job in the parameter also

//it also pases the index and arr

arr2.forEach( (item,index,arr)=>{//doesnt return any values
    console.log(item,index,arr);//prints all this for each elem
})