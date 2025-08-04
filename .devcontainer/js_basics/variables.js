const account_id = 144553
let account_email = "saxena.eshan@gmail.com"
var account_pass = "12345"
account_city = "Bhubaneshwar"//we can declare variable without giving type
let account_state;//undefined value

//account_id = 2  //not alllowed to change constant values

account_email = "eshansaxena@gmail.com"
account_pass = "123321"
account_city = "Bengaluru"

console.log(account_id);

/*
    prefer not use var
    because of issue in block scope and functional scope so "LET" is prefered
*/
console.table([account_id,account_email,account_pass,account_city,account_state])//the output will be in tabular with their outputs