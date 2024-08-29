// Immediately Invoked Function Expression
// It is used to invoked function immediately and in some cases global 
// variables try to pollute the scope of the function to overcome such
// scnerio we wrap function into "()".

(function(){
    console.log("Hello world")  // Named IIFE
})(); // ; Is very IMPORTANT to execute 2nd function

(()=>{console.log("Hello world")})(); // Unamed IIFE

(()=>(console.log("hello")))();  // Explicit return like ()=>()

((username)=>{ console.log(username)})("roshan")    // Passing parameters

console.log(Boolean(1))

