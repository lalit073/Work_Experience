let arr = [45,21,01,98,3,20,85,78]
let arr2=["red", "blue","black", "yellow" ]

let sqr= arr.map((e)=>e*e)
console.log("Original Array", arr)
console.log("Square array",sqr)

//write a lamda function for map  that will return 1 tenth value of each element in the array

console.log(arr.map((x) => x/10))

console.log(arr2.map((e)=> e.substring(0,2).toUpperCase() ))
//using map and lamda show  each string in titlecase 


