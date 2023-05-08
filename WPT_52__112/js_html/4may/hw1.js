//1. Try string functions - charAt , substring, concat, toUppercase, slice
let str = "Hello"
let str2 = "world"
console.log(str.concat(str2))
console.log(str.concat(str2).substring(3,6))
console.log(str.charAt(1).toUpperCase())
console.log(str.substring(2,4))
console.log(str.slice(-5,-2))
// console.log(str.split(1))

let s = "opqrstuv"
console.log(s.slice(0,1).toUpperCase().concat(s.slice(1,8).toLowerCase()))
console.log()