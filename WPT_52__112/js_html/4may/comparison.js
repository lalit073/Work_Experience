let a = "10"
let b = new String("10")

// if(a==b)
// console.log("same")
// else
// console.log("different")

// if(a===b)
// console.log("same")
// else
// console.log("different")

if(a===b.valueOf())
console.log("same")
else
console.log("different")