// Anything created in JS is a object either its function,array,object,
// variables.
// so we can access all these like objects e.g username.name
// properties of object, now have to all these types
// JS have prototype behviour and prototype Inheritence

function normal(){
    let name="roshan"
    console.log(name)
}
normal.age=22
//console.log(normal.age) // output => 22
//console.log(normal.prototype)   // output= {} which means every thing have its own prototype




// Like we inject one variable into function we can also inject function just like 
// prototype give us function after typing "."

function user(username,email){
    this.username=username
    this.email=email
}
user.prototype.print=function(){
    console.log(this.email) // use this to refer current context
}

// use "new" keyword to tell there is newly created prototype pls
// inherit it
//new user("roshan","abc").print()    




// Another Example now we need to trim every sting in JS for that we can create
// userdefined prototype function at parent level directly which is {} object
// this parent level object can access with any function,array,variables becasue we
// define it at top level
let userd="roshan   "
Object.prototype.trimbyroshan=function(){
    console.log(this.trim())
}
//userd.trimbyroshan()
//"kadam   ".trimbyroshan()







// We can inherit one object property to another
let teacher={
    tname:"roshan",
    email:"abc"
}
let school={
    sname:"r.f.naik",
    Address:"xyz",
    //__proto__:teacher
}

school.__proto__=teacher
//Object.setPrototypeOf(school,teacher)
console.log(school.tname)