const accoundId=12324772
let accountEmail="aditya@gmail.com"
var accountPassword="12345"
accountCity="Bijnor"
let accountState;
//it show undefined

//accoundId=1111 //not allowed to reassign because it is const

accountEmail="chaudhary@gmail.com"
accountPassword="1212121"
accountCity="Meerut"
console.log(accoundId);
/*
Prefer not to use var
because of issue in block scope ad functional scope
*/
console.table([accoundId,accountEmail,accountPassword,accountCity,accountState]);


