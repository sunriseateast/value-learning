// There is special cases where we want other behaviour
// of the code e.g like if we return password how to return it
// in normal format or encrypted format

class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get password(){
        console.log("You cannot access password")
    }
    set password(password){
        this._password=password
    }

    get username(){
        console.log(`You can access username ${this._username}`)
    }
    set username(username){
        this._username=username
    }
}
const roshan=new user("roshan",123)
console.log(roshan.password)
console.log(roshan.username)
