// Just like constructor function we can also create constructor classes
// class user{
//     constructor(username,email){
//         this.username=username
//         this.email=email
//     }
//     print(){
//         console.log(this.username)
//     }
// }

// const user1=new user("roshan","abc@gmail.com")
// user1.print()





//Behind the scence by using constructor function
// function user(username,email){
//     this.username=username
//     this.email=email
// }

// user.prototype.print=function() {
//     console.log(this.username)
// }
// const user2=new user("roshan","abc@gmail.com")
// user2.print()



//Inherit one class to another class
class user{
    constructor(username,email){
        this.username=username
        this.email=email
    }
    print(){
        console.log(this.username)
    }
}

class teacher extends user{
    constructor(username,Id){
        super(username) // Tell to store username into username of user just like "this" keyword in constructor function
        this.Id=Id
    }
    printId(){
        console.log(this.Id)
    }
}

const teacher1=new teacher("Roshan",101)
teacher1.print()
