let add =function(a,b){
    console.log(a+b)
}
let c=add(54,63)
//console.log(c)
// console.log(add(63,74))

function sub(a,b){
    return add(a,b)
}
let hh=sub(33,22)
// console.log(hh)
// ---------------------------------------->


// closure--->


let aa=function(x,y){
    return function(){
        return x+y
    }

}
let ss=aa(6,4)
console.log(ss())


// this keyword ---->


let fullName="Sarthak"
let human ={
    fullName:'Prathamesh',
    surName:'Andhare',
    display:function(){
        console.log(this)
        console.log(this.fullName)
    }
}
// console.log(human)
human.display()


//---------------------->

var fullname='ramu'
let human2={
    fullname:'SARTHAK',
    surname:'ANDHARE',
    Display:()=>{
        console.log(this)
        console.log(this.fullname)
    }
}
human2.Display()
