let user="roshan"
console.log(user)

let user2=user  // Here its gives copy of the data
console.log(user2)  //output => roshan

user2="kadam"
console.log(user2)  //output => kadam which says primitive data stores in stack memory 


let userOne={
    email:"abc@gmail.com",
    Id:123
}
console.log(userOne.email)  //output => abc@gmail.com

let userTwo=userOne // Here it gives reference of the data which leads to change in email for both object
userTwo.email="new@gamil.com"
console.log(userTwo.email)  //output => new@gmail.com
console.log(userOne.email)  //output => new@gmail.com
