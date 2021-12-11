// Objects---> using function constructor,using Es6,object.create

// using function construtor-->

function Person(fullName,age,rollNo){
    this.fullName=fullName,
    this.age=age,
    this.rollNo=rollNo
}

let psa= new Person("Prathamesh",18,4)
console.log(psa.fullName)


// ---------------------


// Es6 class--->
// class expression-->
let person=class{

}

// class declaration-->

class PERSON{
    constructor(FULLNAME,AGE,ROLLNO){
        this.FULLNAME=this.FULLNAME
        this.AGE=AGE
        this.ROLLNO=ROLLNO
    }
    diplay(){
        console.log(this.FULLNAME)
    }
}
let ssa=new PERSON("sarthak",14,28)
console.log(ssa.ROLLNO)




// Prototype chaining--->


/* 
psa.__proto__=PERSON.prototype
PERSON.__proto__=function.prototype
function.__proto__=object.__proto__.__proto__
object.___proto___=null
*/

console.log(ssa.__proto__)




