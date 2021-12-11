function add(x,y){
    return x+y

}
let add1=add(3,6)
console.log(add1)

// -------------------------
// function declaration --->

let aa=function(m,n){
    return m*n
}
let  bb=aa(2,8)
console.log(bb)



// -------------------------------------

let ml=function(y,z){
    return y*z
}

let ss=ml(21,54)
console.log(ss)

// ----------------------->
// object as parameter to another --->
let car={
    name:'bmw',
    model:"bk32",
    features:['gr8','good']

}
function changeModel(obj){
    obj.model='d54v'
    return obj
}

changeModel(car)
console.log(car)


let {model,features:[s,t]}=changeModel(car)
console.log(model)
console.log(s,t)

//  array as parameter to another function ---->
let arr=function(a,b,c,d,e){
    // return a+b+c+d+e
    // let aaa=[1,2,3,4,5]
    return aa.reduce(function(acc,el){
        return acc+el
    },2)
}
let yy=arr(1,2,3,4,5)
console.log(yy)

