let demo_function=function(){
    return                      // When we add return it neglacte the next lines of code
    console.log("Hii users")
}
demo_function()

let parameters=function(num1,num2){
    if(!num2){                              // we can also do num2===undefinied
        console.log("Please enter number")
        return
    }
    else{
        return `Addition is ${num1+ num2}`
    }
}
console.log(parameters(2,5))


let spread=function(...num1){   //Its a spread operator but here is called rest operator to get multiple values 
    return num1 //Stores multiple values in an array
}
console.log(spread(2,3,4)) // output => [ 2, 3, 4 ]

let spread2=function(val1,val2,...num1){
    console.log(val1,val2)  // output => 2,3 it stores starting value
    return num1     // output => It stores remaining value in array
}
console.log(spread2(2,3,4,5,6))

// Passing Object to function
let newobj={
    username:"roshan",
    age:28
}

let getobj=function(anyobj){
    console.log(anyobj.username)    //output => roshan
}
getobj(newobj)
getobj({username:"Kadam",Age:20})


//Passing Array to function
let demoarray=[900,7000,800]
let getarray=function(passarray){
    console.log(passarray[0]) //output => 900
}
getarray(demoarray)


// Hositing
addone(9)               // We can access function before declariation
function addone(num){
    console.log(num+1)
}

addtwo(9)               // We cannot access the function before in this type of declariation
const addtwo=function(num){
    console.log(num+1)
}