let obj={
    usrname:"Roshan",
    email:"abc@gmail.com",
    welcome:function(){
        console.log(this.email)
    }
}

obj.welcome()   //output => abc@gmail.com because this refers the current context

console.log(this)   //output => {} In browser it gives windows object for geting events which help for DOM manupuliation

let demo=function(){
    let username="roshan"
    console.log(this.username)  // output => undefined we cannot use current context idea in function
}
demo()

// Arrow function

let arrow=() => {
    return "hello I am arrow"
}
console.log(arrow())



let arrow2=(arrowobj) => {
    console.log(arrowobj.usrname)
}
arrow2(obj)



let arrow3=()=>(console.log("hi"))  // Explicitly return the value specified
arrow3()

let arrow4=(getobj)=>(getobj.usrname)   // herewe pass the object into arrow function
console.log(arrow4(obj))