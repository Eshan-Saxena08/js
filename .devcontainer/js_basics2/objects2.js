 //creating objects using singleton
 //there is no internal diff

 const user = new Object()//singleton obj

 //const user = {}//not singleton obj

 user.id = "123abc"
 user.name = "sammy"
 user.loggedin = false

 const reguser = {
    email : "qlqfq@gmail.com",
    fullname : {//there can be n no of nest 
        userfullname: {
            firstname: "Eshan",
            lastname : "saxena"
        }
    }

 }
 console.log(reguser.fullname.userfullname.firstname);

 //to combine objs
 const obj1 = {1:"a",2 : "b"}
  const obj2 = {3:"a",4 : "b"}

  const obj3 = {obj1,obj2}//combining objs
  //object inside object
  console.log(obj3)

  const obj4 = Object.assign({},obj1,obj2)//just like array it combines the elements of the object and not the objects

  //first elem inside assign() act as target i.e all elems will be stores inside {}(object) and sources from elements to be stored are obj1,obj2
  //if not given all values will go inside obj1


  //or just like array spread the elements of the object

  const obj5 = {...obj1,...obj2}
  console.log(obj5);

  //we can store object inside array also
  const user4 = [
    {
        email:"example"
    },
    {
        //any random key value
    }
  ]

  user4[1].email//to access elems of first obj from array users

  //to get all keys of object
  console.log(Object.keys(user));
  console.log(Object.values(user));

  //to check if specific property there
  console.log(user.hasOwnProperty('name'));