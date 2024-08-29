// Arrays => for each,for loop, for in gives "keys" , for of gives "values" directy
let demoarray=["roshan","kadam","abc@gmail.com"]
let index=0
for (let index = 0; index < demoarray.length; index++) {
    //console.log(demoarray[index])
}

for (const values of demoarray) {
    //console.log(values)
}

for (const key in demoarray) {
    //console.log(demoarray[key])
}

demoarray.forEach(element => {
    //console.log(element)
});     // It need call back function 

demoarray.forEach(function(element,index,array){})
// The call back function we provide have access of element,index value 
// and whole array

demoarray.forEach(()=>{})
//we can also define in this way

demoarray.forEach(element=>{})



let objarray=[{
    name:"roshan",
    value:"kadam"
},
{
    name:"Neil",
    value:"Bounce"
},
{
    name:"Ronak",
    value:"Dj"
}]

objarray.forEach(function(element){
    //console.log(element.name)   // Output => roshan,Neil,Ronak
})
for (const values of objarray) {
    console.log(values.name)
}





// Objects => Can only use for in gives "keys"
let demoobj={
    name:"Roshan",
    email:"abc@gmail.com"
}
for (const key in demoobj) {
    //console.log(key) // output => name,email
    //console.log(demoobj[key])
}





// Maps => Can only use for of loop directly gives values
let demomap=new Map()
demomap.set("Name","Roshan")
demomap.set("Email","abc@gmail.com")
for (const [keys,values] of demomap) {
    //console.log(keys,values)
}