// stack and heap memory
// primitive -> Stack (we get copy of the memory)
//so original value is not changed
//non - primitive -> Heap (we get referece of the object and not the copy ,ie the original)
//original value is changed

let name = "Eshan"
let anothername = name
anothername = "AKP"
console.log(name)
console.log(anothername);//cannot chnage original because it gives copy

let user1 = {
    email :"user@google.com",
    upi: "user@ybl"

}
let user2 = user1//user 2 can change values of user 1 as original vlaue r given as reference

user2.email = "saxena.eshan@gmail.com"
console.log(user1.email);
console.log(user2.email);
//both will give same values
