let newString= new String("roshaan")
console.log(typeof newString) //output => Object
console.log(newString.valueOf()) //output => value i.e roshan
console.log(newString.charAt(0)) //output => 'r' because it is an object store each character as Index position
console.log(newString.charCodeAt(0)) //output => Gives unicode value of r at index position 0
console.log(newString.codePointAt(0)) //output => Help to convert from object to string
console.log(newString.concat(" kadam")) //output => "roshan kadam" contact string
console.log(newString.endsWith("an"))   //output => "true" if it ends with "an"
console.log(newString.includes("s"))    //ouptut => "true" if it includes "s"
console.log(newString.indexOf("a")) //output => 2 Index position
console.log(newString.lastIndexOf("a")) //output => 5 Here 'a' occurs double it gives last "a" occurence Index position
console.log(newString.length) // output => 7 gives length of string
console.log(newString.localeCompare("roshaan")) //output => 0 if exact match 
console.log(newString.match("roshaan")) //output => return array if match
console.log(newString.matchAll("roshan"))
let b=new String("\u0072\u006f\u0073\u0068\u0061\u006e")    //Convert unicode to normalize form
console.log(b.normalize("NFC"))
console.log(newString.padEnd(12,"kadam")) //output => roshankadam Here lenght of string is 7. we need to add padstring length in target 
console.log(newString.padStart(12,"kadam")) //output => kadamroshan
console.log(newString.repeat(2)) //output => roshaanroshaan
console.log(newString.replace("roshaan","roshan")) //output => roshan to replace specific string in sentence
console.log(newString.search("a")) //output => 4 seracr for 'a' and give its index position
console.log(newString.slice(0,2)) //output => ro slice on basis of index we can also slice on negative scale
let d=(newString.split("a"))
console.log(d) // output => ['roshan','','n'] puts these substrings into an array, and returns the array
console.log(newString.startsWith("o")) //output => flase
console.log(newString.substring(2,5)) //output => sha it exludes 5 (2,3,4 included)
console.log(newString.trim())

let newNumber=new Number(123)


let a="roshan"
//console.log(typeof a) //output => String