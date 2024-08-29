// Here object is not iterable 
// const user={
//     name:"roshan",
//     email:"abc@gmail.com"
// }
// for (const [key,values] of user) {
//     console.log(key,values)
// }
// To iterate through special objects we can use
// Object.entries(<objectname>) otherwise their is map property
const user2={
    name:"roshan",
    email:"abc@gmail.com",
    demo:function(){
        console.log(this.name)
    }
}
// What if there is function in object 
// so we need to add check here
// for (const [key,values] of Object.entries(user2)) {
//     if(typeof values !== "function"){
//         console.log(key,values)
//     }
// }



// We can also see the property of object where it is
// wiritiable,enumerable or not
console.log(Object.getOwnPropertyDescriptor(user2)) // output => undefined
// so we need to pass which key to check

console.log(Object.getOwnPropertyDescriptor(user2,"name"))
// Output =>
// undefined
// {
//   value: 'roshan',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }




