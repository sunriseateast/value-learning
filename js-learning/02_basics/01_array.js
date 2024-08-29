const myarray=[3,4,5,6]
console.log(myarray)

myarray.push(9)
console.log(myarray) // output => [ 3, 4, 5, 6, 9 ]
myarray.pop()
console.log(myarray)    // output => [ 3, 4, 5, 6 ]

myarray.unshift(9) 
console.log(myarray)    //output => [ 9, 3, 4, 5, 6 ]
myarray.shift()
console.log(myarray)    //output => [ 3, 4, 5, 6 ]

const newarray=myarray.join()
console.log(newarray)


console.log(myarray.slice(1,3)) //output => [ 4, 5 ]
console.log(myarray)    // output => [ 3, 4, 5, 6 ] original array as it it not include last last index

console.log(myarray.splice(1,3)) //output => [ 4, 5, 6 ]
console.log(myarray) //output => [ 3 ] cut values from original array modify it and also includes last index


let mv_heros=["Marvel","batman","superman"]
let dc_heros=["Ironman","Aquaman","Hulk"]

let all_heros=mv_heros.concat(dc_heros)
console.log(all_heros)  // output => [ 'Marvel', 'batman', 'superman', 'Ironman', 'Aquaman', 'Hulk' ] Merge two arrays 

console.log(...all_heros) //output => Marvel batman superman Ironman Aquaman Hulk

let all_heros_2=[...mv_heros,...dc_heros]
console.log(all_heros_2) //output => [ 'Marvel', 'batman', 'superman', 'Ironman', 'Aquaman', 'Hulk' ] Spread the array

console.log(Array.from("roshan")) //output => [ 'r', 'o', 's', 'h', 'a', 'n' ] create an array

let a=100
let b=200
let c=300
console.log(Array.of(a,b,c)) //output => [ 100, 200, 300 ] create Array from given variables