// oops and fucntional is just programming style

// parts of oops
// 1.Object literal => literally object/normal object
// 2.Constructor function
// 3.Prototypes
// 4.Classes
// 5.Instances(new,this) => when we use "this" keyword we talked about current context


// Constructor function are used to construct the same thing by adding "new"
// keyword  e.g create Instance/structure/context with same function


// when we do console.log(this) => {} which is empty object
// in below code we just add this.Username to this empty object
// we can also use another variable name
function user(Username,logincount,email){
    this.Username=Username,
    this.logincount=logincount,
    this.email=email
    return this // return all values of this its by default
}

// const userOne=user("roshan",22,"abc@gmail.com")
// const userTwo=user("kadam",22,"cdf@gmail.com")
// console.log(userOne)    // output=> kadam It overwrites the values

const userOne=new user("roshan",22,"abc@gmail.com")
const userTwo=new user("kadam",22,"cdf@gmail.com")
console.log(userOne)