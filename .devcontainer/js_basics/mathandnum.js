const score = 400
console.log(score);

const  balance = new Number(100)
console.log(balance);
//both give diff outputs as balance is type casted

console.log(balance.toString().length);
console.log(balance.toFixed(2));//decimal upto 2 places

const othernum = 3.14786
console.log(othernum.toPrecision(2));//gives no of digits specified

const num = 1000000
console.log(num.toLocaleString('en-IN'));//puts commas in the number according to indian number system


//***************MATHS****************

console.log(Math);
console.log(Math.abs(-4))//changes -ve to positive not vice-versa
console.log(Math.round(4.6))//rounds off no.
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.random());//gives random value btw 0 and 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//math.floor gives a number and random produces random no 
//this gives no btw 10 and 20