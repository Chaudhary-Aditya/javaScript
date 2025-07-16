const name="Aditya"
const repoCount= 12

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Adityach')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
console.log(newString);


const anotherString=gameName.slice(-6,4);
console.log(anotherString);

const newStringONe=" Chaudhary   "
console.log(newStringONe)
console.log(newStringONe.trim());
//trimStart()
//trimEnd()

const url="https://adityagoogle.com%10chaudhary"

console.log(url.replace('%10','-'))
console.log(url.includes('aditya'))

