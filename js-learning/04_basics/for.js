let demo=["Roshan","Bhimaji","Kadam"]
for (let index = 0; index < demo.length; index++) {
    console.log(demo[index])
    
}


for (let index = 0; index < 10; index++) {
    if(index===5){
        console.log(`5 detected`)
        continue    // If condition is meet ignore 
    }
    console.log(`Value is ${index}`)
    
}

for (let index = 0; index < 10; index++) {
    if(index===5){
        console.log(`5 detected`)
        break    // If condition break the loop
    }
    console.log(`Value is ${index}`)
    
}