const mysym=Symbol()
let UserData={
    [mysym]:1020,
    name:"Roshan",
    email:"abc@gmail.com",
    IsLoggedIn:true,
    age:18
}

console.log(UserData.IsLoggedIn)    //Object by default convert keys to string hence this method is not so good
console.log(UserData["IsLoggedIn"])
console.log(UserData[mysym])

UserData.greeting="hello"   // Add new key named Greeting to object
console.log(UserData)

UserData.newFunction=function(){
    console.log("Hello user")
    console.log(`Hello user ${this.name}`)
}
console.log(UserData)
console.log(UserData.newFunction())

Object.freeze(UserData) //Freez the object not alllowed to modified
UserData.email="xyz@gmail.com"
console.log(UserData["email"])