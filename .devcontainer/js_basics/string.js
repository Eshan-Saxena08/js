const name = "Eshan"
const repoCount = 50

//console.log(name + repoCount + "Value"); old method to concentenate
console.log(`Hello my name is ${name} and repo is ${repoCount}`);// using backticks also called string interpolation


//declaring string
const ign = new String('Eshan-saxena')
console.log(ign[0])//to access 1st letter
console.log(ign.__proto__);//inherits properties and methods
console.log(ign.length)//part of proto methods
console.log(ign.charAt(2));//gives char at index
console.log(ign.indexOf('t'))//gives index of char

const newstring = ign.substring(0,4);
console.log(newstring);
const newchar = ign.slice(-8,4)//starts from rev for -ve values
//.trim removes spaces front and back

const url = "https://eshan.com/eshan%20saxena";
//to change errors
url.replace("%20","-");
url.includes("eshan");//checks if string is there

