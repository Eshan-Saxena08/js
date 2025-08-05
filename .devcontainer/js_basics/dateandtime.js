//Date is an object

let mydate = new Date() //not readable so we convert to string
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());

let mycreatedDate = new Date(2023,0,23)
console.log(mycreatedDate.toDateString());
//months start from 0 so (year,month,date)

//one more format
let anothercreate = new Date("2023-01-14")
console.log(anothercreate.toDateString());


//time stamps

let myTimeStamp = Date.now()//gives millisecond value after that time stamp

console.log(myTimeStamp);

//to get time from date created
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));//in seconds

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//`${newDate.getDay()} and time is ...`

//to define the properties using object
newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ''
})