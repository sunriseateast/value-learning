let UserData={
    name:{
        fullname:{
            firstname:"roshan",
            lastname:"kadam"
        }
    },
    emailid:"anc@gmail.com",
    age:25
}

let Userstate={
    IsloggedIn:true,
    Id:1020
}
console.log(UserData.name.fullname.firstname)   // output => roshan
const UserDataState={...UserData,...Userstate}  // Merge two objects just like arryas
console.log(UserDataState)
console.log(Object.keys(Userstate)) //output => [ 'IsloggedIn', 'Id' ] store keys in form of arrays
console.log(Object.values(Userstate))   //output => [ true, 1020 ] store values in form of arrays
console.log(Userstate.hasOwnProperty("Id"))