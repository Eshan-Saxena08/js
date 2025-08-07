//scope - inside {}

//var c = 300 global scope\

if(true){//local scope
    let a = 10
    const b = 20
    var c = 30//or c = 30 is same
}
console.log(a);//gives error
console.log(b);//gives error
console.log(c);//prints 30

//nested scope

function one(){
    const username = "eshan"
    function two(){//inside can access outside but outside cannot
        const website = "yt"
        console.log(username);
    }
    //console.log(website); gives error as its outside {}
    two()
}
one()

//******************creating function type


//addone(5) will also work her and give values
function addone(num){
    return num + 1
}
addone(5)

//addtwo(5) will give error here due to diff function declerations


const addtwo = function(num){
    return num + 2
}
addtwo(5)