function MathsUtil(num1)
{  this.value = num1
    this.cube=()=>{
        console.log("cube=",this.value*this.value*this.value)
    }
}
function MathsProto()
{    this.square=(x)=>{
        console.log("square is ",x*x)
    }
}

function MathsProto2()
{
    this.power=(a,b)=>
    {
        console.log(Math.pow(a,b))
    }
}



//PROTOTYPE chaining -----
MathsProto2.prototype = new MathsProto()
MathsUtil.prototype = new MathsProto2()
let x = new MathsUtil(3)
x.cube()
x.square(4)
x.power(2,3)
console.log("x=",x)
console.log("prototype of x=",Object.getPrototypeOf(x))
let y = new MathsUtil(3)
y.cube()
y.square(5)
y.power(2,4)

console.log("y=",y)
console.log("prototype of y=",Object.getPrototypeOf(y))



