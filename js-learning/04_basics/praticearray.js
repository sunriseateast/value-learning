let demoarray=[1,2,3,4,5,6,7,8,9,10]

index=0
for (let index = 0; index < demoarray.length; index++) {
    //console.log(demoarray[index])
}

for (const num of demoarray) {
    //console.log(num)
}

for (const key in demoarray) {
    //console.log(demoarray[key])
}

//demoarray.forEach((element)=>{console.log(element)})

// const z=demoarray.map((element)=> element)
// console.log(z)

const z=demoarray.reduce((acc,curr)=>acc+curr,0)
//console.log(z)





let arrayobject=[
{name:"Roshan",email:"Kadam@gmail.com",Id:101},
{name:"Rahul",email:"Rahul@gmail.com",Id:102},
{name:"Sam",email:"Sam@gmail.com",Id:103},
{name:"Murti",email:"Murti@gmail.com",Id:104},
{name:"Megha",email:"Megha@gmail.com",Id:105},
{name:"Rohit",email:"Rohit@gmail.com",Id:106},
{name:"Rakesh",email:"Rakesh@gmail.com",Id:107},
{name:"Kalpana",email:"Kalpana@gmail.com",Id:108},
{name:"Eshari",email:"Eshari@gmail.com",Id:109},
{name:"Ronak",email:"Ronak@gmail.com",Id:110},
]

for (const element of arrayobject) {
    //console.log(element.name)
}

//arrayobject.forEach((element)=>{console.log(element.email)})

let b=arrayobject.filter((element)=> element.Id > 105)
//console.log(b)

let add=arrayobject.reduce((acc,curr)=>acc+curr.Id,0)
console.log(add)

