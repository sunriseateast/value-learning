//DataTypes like int,string,bolean are the primitive datatypes
//DataTypes like array,function,object are nonprimitive datatypes

let FirstArray=["Roshan","kadam",23]
console.log(typeof FirstArray) //object

let Firstobject={
    name:"roshan",
    email:"abc@gmail.com"
}
console.log(Firstobject['name'])
console.log(typeof(Firstobject)) //object

let Function=function(){
    console.log("hello world")
}

console.log(typeof Function) //function
