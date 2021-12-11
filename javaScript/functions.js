//  function without par and without return type
function add(){
     console.log(8+3)
}
add()
//  function with par and with return type
function sub(x,y){
    return x-y
}
xx=sub(5,6)
console.log(xx)
// Type of functions----->
// 1.function declration( line 7 to 11)
// 2.function expression--->


let mul= function(a,b){
    return a*b
}
let z=mul(6,4)
console.log(z)

// 3. arrow function----->
let div=(c,d)=>{
    return c/d
}
let aq=div(6,3)
console.log(aq)
// OR--------------------------->
let wq=(n,m)=>n+m
pp=wq(5,6)
console.log(pp)


// -------------------------------




let numbers=[1,6,85]
function addition(arr){
    arr[0]=21
    console.log(arr)
    
}
addition(numbers)
console.log(numbers)



console.log('------------------')
// ---------------------------------

let cars={
    name:'BMW',
    model:'A54',
    code:5218
}
function changeModel(Obj){
    Obj['model']=' Q8'
    console.log(Obj)

}
console.log(cars)
changeModel(cars)
console.log(cars)


// -----------------------------



let joy='pqoyrbvdheuaatywvwv'
function changeString(str){
    str='mnghfghfd'
    console.log(str)
}
console.log(joy)
changeString(joy)
console.log(joy)


// --------------------------------------


// spread and rest operator-->


/* spread -> [1,2,3,5]--> 1,2,3,5
rest ---> 1,2,3--> [1,2,3]  */

// old way---->
let magic=[3,2,1]
function addFirstTwo(arr){
    return arr[0] + arr[1]
}
let ss=addFirstTwo(magic)
console.log(ss)
//  new way---->


let das=[6,8,9,8,6]
function mulFirstThree(a,b,c){
    return a*b*c
}
let psa=mulFirstThree(...das)
console.log(psa)

console.log('-------------------')
// -------------------------

function mulAll(...arr){
    return arr.reduce((acc,el)=>acc*el)
}
let wer=mulAll(66,5,8,99,879)
console.log(wer)