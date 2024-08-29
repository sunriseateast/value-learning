// We can use normal "for loop" as well as "for of" loop to iterate through
// array
let numbers=[1,2,3,4]
for (const num of numbers) {
    console.log(`Value is ${num}`)
}

let demo=[1,2,3,4,5]
for (const arrays of demo) {
    console.log(`Value is ${arrays}`)
}





//Map is use to store unique key value pairs and it is iterable
//whereas objects are not iterable


let demomap=new Map()
demomap.set("Name","Roshan")
demomap.set("Email","abc@gmail.com")
demomap.set("Id","123")
console.log(demomap)

// output =>Map(3) {
//              'Name' => 'Roshan',
//              'Email' => 'abc@gmail.com',
//              'Id' => '123'
//          }




//It gives o/p in form of array
for (const mapit of demomap) {
    console.log(mapit)
}
// output =>        [ 'Name', 'Roshan' ]                  
//                  [ 'Email', 'abc@gmail.com' ]
//                  [ 'Id', '123' ]



//To print map key,values we need to destructure it
for (const [keys,values] of demomap) {
    console.log(`Key is ${keys} & values are ${values}`)
}