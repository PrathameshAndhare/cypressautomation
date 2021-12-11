function Person(fullName,age,rollNo) {
    this.fullName = fullName;
    this.age = age;
    this.rollNo = rollNo;
}
let first = Person('Prathamesh', 18, 1);
let second = Person('Sarthak', 14, 28);
let bandhus = [first, second];


let avAge = bandhus.reduce((acc, el) => {
    return acc + el.age;
},0)/bandhus.length;
console.log(avAge)





let updateCountry=bandhus.map((el)=>{
    el.country="India";
    return  el;
})
console.log(updateCountry)


console.log(bandhus.filter((el)=>{
    return el.fullName.length>5;
}))



function Person2(firstName,age,rollNo){
    this.firstName=firstName;
    this.age=age;
    this.rollNo=rollNo;
    this.display=function (){
        console.log('Hello')
    };
}
let ssa=Person2('Sarthak',14,28)
console.log(ssa)


Person2.prototype.display=()=>{
    console.log("Hello")
};



// ------------------------------------>

class Vehicle {
    country=undefined;
    registerNo=undefined
}

let audi=new Vehicle()
let jaguar=new Vehicle()


audi.Number=546
jaguar.Number=987

console.log(audi)
console.log(jaguar)



class Vehicle2 {
    constructor(country,regNo){
        this.country=country
        this.regNo=regNo
    }
}

let bmw=new Vehicle2('bmw',547)


class vehicle3{
    language='Hindi'

    setCountry(name){
        this.country=name
    }
    setReg(number){
        this.regNo=number
    }
}

let audi3=new vehicle3()
audi3.setCountry('india')


let ferari= new vehicle3()
ferari.setReg(654)


console.log(audi3)
console.log(ferari)
// -----------------------




class Grandfather {
    constructor(first,second){
        this.first=first
        this.second=second
    }
    display(){
        console.log(this.first,this.second)
    }
}

class Father extends Grandfather{
    constructor(third,fourth){
        super(first,second)
        this.third=third
        this.fourth=fourth
    }//override
    display(){
        console.log(this.third)
        super.display()
    }
}