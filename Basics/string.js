const name = "Rishabh dubey";
let age = 18;

console.log(`My name is ${name} and my age is ${age}`);


const newString = new String('rishabh');
console.log(newString[0]);
console.log(newString.__proto__);
console.log(newString.length);
console.log(newString.toUpperCase());
console.log(newString.indexOf("h"));
console.log(newString.charAt(4));


 const gameName = newString.substring(0,4);
 console.log(gameName);


 const  newStringOne = "    Spiderman    ";
 console.log(newStringOne.trim());
  

 let name1 = "virat kholi";
 let newName = name1.slice(-8 , 5);
 console.log(newName);

 let url = "https://Rishabh.com/Rishabh%30dubey"

 console.log(url.replace('%30', '_'));

 console.log(url.includes('Rishabh'));
 console.log(newStringOne.split('-'));