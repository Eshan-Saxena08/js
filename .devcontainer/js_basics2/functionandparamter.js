function sayMyName(){
    console.log("Eshan");
}

sayMyName()//without parenthesis it is ref and after putting () it executes


function add2num(num1,num2){
    console.log(num1 + num2);
}
function add2numbetter(num1,num2){
        return num1 + num2
        
}
add2num(12,12)
add2num(12,"3")//JS converts 12 to string and concats both to 123

//const result = add2num(1,2)
//printing result will give error 

//add2num will give proper value

function loginuserMessage(username = "sam"){//sam is default value
    
    //if no value passed then undefined is used

    if(username === undefined){//orr if(!username) can be used
        console.log("please enter username")
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("Eshan"))

//if values passed are more than parameters we use rest operators => ...

function calcprice(...num1){
    return num1
}
console.log(calcprice(1,2,4));//prints array

//one more eg
function calc(val1,val2,...num1){
    return num1
}
console.log(calc(200,400,500,2000))//here only 500 and 2000 will be added to array because num1 and num2 values are being stored but not returned

//how to pass obj in functions

const user = {
    username: "Eshan",
    price: 199
}
function handleObj(anyobject){//random name any obj can be passed

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);

}
handleObj(user)
//direct obj can also be passed without passing obj
handleObj({
    username:"Eshan",
    price:"122"
})

//arrays and functions

const newArr= [200,400,100,500]

function returnsecondvalue(getArray){//randome array name
    return getArray[1]

}
console.log(returnsecondvalue(newArr))
//or pass dirwct array
console.log(returnsecondvalue([100,220,331,33]))