// Like In promise we use setTimeout to wait for operation to complete
// async await wait for operation is executed we dont need to specify the time
// for execution

// const promised=new Promise(function(resolve,reject){
//     let error=true
//     if(!error){
//         resolve({username:"roshan",email:"abc@gmail.com"})
//     }else{
//         reject("error detected")
//     }

// })

// async function consume(){
//     try{
//         const response=await promised
//         console.log(response);
//     } catch(error){
//         console.log(error);
//     }
// }
//consume()


async function api(){
    try{
        const response=await fetch("https://api.github.com/users/hiteshchoudhary")
        const data=await response.json()
        console.log(data.name)
    }catch(error){
        console.log(error)
    }
}
api()

fetch("https://api.github.com/users/hiteshchoudhary").
then((response)=> {return response.json()}).
then((data)=>console.log(data.name)).
catch((error)=> console.log(error))