let a=123
//console.log(typeof(a))
console.log(typeof String(a))

let b="245"
console.log(typeof(b))
let z =new Number(b)
console.log(typeof(b))

let c="245a"
c=Number(c)
console.log(c)  //It shown NaN(Not a Number)
console.log(typeof(c)) //But its type is Number

let IsLoggedIn=true
d=Number(IsLoggedIn)
console.log(IsLoggedIn)

let IsLoggedout=0                   // 0=> flase
IsLoggedout=Boolean(IsLoggedout)    // 1=> true
console.log(IsLoggedout)            // ""=> false   "somevalue"=>true