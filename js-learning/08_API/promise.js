// Promise is object shows eventual complition or failure of async operation 
// async operations -> database calculation,file access which takes time cuz it get access from kernel
// still we can use async await it depends we can also use promises

const promised=new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("promise 1 executed")
        resolve()   // To tell we are going to consumed promised in then context
    },1000)         // also it resturn values 
})

promised.then(function(){
    //console.log("promise 1 consumed")
})


// resolve() get values from somewhere
// as it directly connected to then
const promised2=new Promise(function(resolve,reject){
    setTimeout(function (){
        resolve({username:"roshan",email:"abc@gmail.com"})
    },1000)
})
promised2.then(function(user){
   // console.log(user.username)
})



// Chaning system in promise use in database

const promised3=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"roshan",email:"abc@gmail.com"})
        }else{
            reject("Someting went wrong")
        }
    },1000)
})
promised3.then(function(user){
    return user.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Either resolve or reject executed")
})