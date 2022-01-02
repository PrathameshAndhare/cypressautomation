let x=10
console.log(x)
const y=50
console.log(y)
console.log('---------------')
let a=100
let b=30
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
// Functions --->
console.log('---------------')
function calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
calculator(100,60)
//function without parameter and without return type

console.log('-------------')

function add(){
    console.log(63+45)
}
add()
add()

// function with parameter and without return type

console.log('-------------')
function sub(x,y){
    console.log(x-y)
}
console.log("-----------------")


sub(20,8)
sub(125,5)

// function with parameter and with return type 
// 100 show   100 given ?

function mul(x,y){
    return x * y 
}

let h = mul(15,2)
console.log(h)
console.log(h + 200)
console.log(h -20)
