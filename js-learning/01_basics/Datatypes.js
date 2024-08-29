//bigint
//boolean => true/false
//null => standalone value
//undefined => value not assigned

let LoggedIn=true
console.log(LoggedIn)

let empty=null
console.log(empty)

let abc
console.log(abc)

console.table([LoggedIn,empty,abc])

console.log(typeof(undefined))  //type is undefined but for null its object
console.log(typeof(null))