// //----ye to data h vo memory me ki strike se store hote and kis trike se access kr skte h


// Primitive :--call by value
//  7 type: String, Number, Boolean, null, undefined, Symbol, BigInt
const a=null;
console.log(typeof a);


//let id=Symbol('123')
//let iddd=Symbol('123')
//console.log(id===iddd)


// Reference (Non primitive)
// Array, Objects,Functions

let b=["a","b","c"];
let myObj={
    name:"Aditya",
    age:22,
}

const myFunction=function(){
    console.log("Aditya Chaudhary")
}


console.log("Type of Number ",typeof Number)
console.log("Type of String ",typeof String)
console.log("Type of BIgInt",typeof BigInt)
console.log("Type of Symbol ",typeof Symbol)
console.log("Type of Boolean ",typeof Boolean)
console.log("Type of null ",typeof null)
console.log("Type of undefined",typeof undefined)
console.log("Type of array ",typeof b)
console.log("Type of Object",typeof myObj)
console.log("Type of Function ",typeof myFunction)

/**
 Output 

Type of Number  function
Type of String  function
Type of BIgInt function
Type of Symbol  function
Type of Boolean  function
Type of null  object
Type of undefined undefined
Type of array  object
Type of Object object
Type of Function  function
 */


// But

/*let Number = 42;
let String = "Hello";
let BigInt = 1234567890123456789012345678901234567890n;
let sym= Symbol("sym");
let Boolean = true;
let nullValue = null;
let undefinedValue;
let c = [1, 2, 3];
let myOBj = { name: "Aditya" };
let myfunction = function () {};

console.log("Type of Number ", typeof Number);          // number
console.log("Type of String ", typeof String);          // string
console.log("Type of BigInt ", typeof BigInt);          // bigint
console.log("Type of Symbol ", typeof Symbol);          // symbol
console.log("Type of Boolean ", typeof Boolean);        // boolean
console.log("Type of null ", typeof nullValue);         // object (this is a known quirk in JS)
console.log("Type of undefined", typeof undefinedValue);// undefined
console.log("Type of array ", typeof c);                // object (arrays are objects in JS)
console.log("Type of Object", typeof myOBj);            // object
console.log("Type of Function", typeof myfunction);     // function Object
*/

