const user = {
    username: "eshan",
    price: 99,
    welcomemessage: function(){//"this" tell us that inside the {}
        console.log(`${this.username},welcome to website`)//mostly used inside objects
        console.log(this);//prints the current context i.e the whole object data
    }
}
user.welcomemessage()
user.username = "AKP"
user.welcomemessage()
console.log(this);//prints empty{} because there is no context here as it is outside{}

function food(){
    let username = "eshan"
    console.log(this.username);//prints undefined which means this works inside objects only not in function
}
food()

//  ***ARROW FUNCTION ***********

    const chai = () => {//inside arrow func also this doesnt work
        let username2 = "eshan"
        console.log(this.username2);
        console.log(this);//prints {} and no details but inside normal function it prints other info also
    }
    chai()

    //making normal arrow function

    const addtwo = (num1,num2) =>{
        return num1+num2//explicit
    }

    //implicit return using arrow without using retun keyword

    const addtwoimplicit = (num1,num2) => num1 + num2
    //if {} return required if () no return req.

    //implicit object return
    
    const addobj = (num1,num2) => ({username : "Eshan"})//need to be wrapped in () orelse gives undefined