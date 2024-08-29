function user(name){
    this.name=name
    console.log("called")
}
function users(name,email,password){
    user.call(this,name)    // Here we call user function explicity and tell to use users execution context
    this.email=email
    this.password=password
}
const data=new users("roshan","abc@gmail.com","rocky")
console.log(data)