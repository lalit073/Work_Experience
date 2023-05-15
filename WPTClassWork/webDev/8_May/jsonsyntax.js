let obj = {personName:"Purva", personAge:22}
console.log(obj.personName,obj.personAge)
let arr = []
arr.push({personName:"Manas", personAge:20})
arr.push({personName:"Neha",personAge:30})
arr.push({personName:"sad",personAge:34})

console.log(arr)
totalage = 0
arr.forEach((b)=>{totalage=totalage+b.personAge})
console.log(totalage)

