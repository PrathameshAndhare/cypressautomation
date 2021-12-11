// function Person(nm,ag,rn){
//     this.name=nm,
//     this.age=ag,
//     this.rollNo=rn
// }
// let ssa=Person('Sarthak',22,11)
// console.log(ssa)
// console.log(ssa.age)
// // ---------------------------------



function PERSON(nm,ag,rn){
    this.name=nm,
    this.age=ag,
    this.rollNo=rn,
    this.YOB=()=>{
        console.log(2021-`${this.age}`)
    }
}
let psa=new PERSON('Prathamesh Andhare',18,4)
psa.YOB()


// PEERSON.prototype=psa.__proto__
// Every object has __proto__
console.log(PERSON.prototype===psa.__proto__)
let ages=[1,2,3]
let names=new Array(ages)
console.log(Array.prototype==ages.__proto__)



let ss=[2,66,4,2,4,14]
console.log(new Set(ss))
let aa=[...new Set(ss)]
console.log(aa)




Array.prototype.unique=function(arr){
    return [... new Set(arr)]
}

let kk=[4,87,25,4,1,55]
console.log(kk.unique(kk))


// let Vehicle=(no,reg,clr)=>{
//     this.no=no,
//     this.reg=reg,
//     this.clr=clr
// }
// Vehicle.prototype.country="India"
// let Luna= new Vehicle(21,22,'Blue')
// // console.log(Luna.country)

// // console.log(Luna.hasOwnProperty('country'))


let sss={
    first:"Sarthak",
    second:"Andhare"
}
console.log(sss.hasOwnProperty('first'))





class Play{
    constructor(name,age,lang){
        this.name=name
        this.age=age
        this.lang=lang
    }
    display(){
        console.log(2021-Number(this.age))
    }
}

let csa= new Play('Kartik',18,'Hindi')
csa.display()
console.log(csa instanceof Play)
