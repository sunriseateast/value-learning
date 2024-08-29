let mydate=new Date()
console.log(mydate) //output => 2024-03-24T14:34:32.951Z
console.log(mydate.toDateString()) //output => Sun Mar 24 2024
console.log(mydate.toLocaleString())    //output => 3/24/2024, 8:07:27 PM
console.log(mydate.toLocaleDateString())    //output => 3/24/2024

let createDate=new Date(2023,0,1)   //output => (yyyy,mm,dd)
console.log(createDate.toDateString())

let newDate= new Date("01-09-2023")
console.log(newDate.toLocaleString())


console.log(mydate.getTime()) //output => 1711292200444 it use to booking like app and poll like app