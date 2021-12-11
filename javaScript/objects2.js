
// Retrive  // Dot notation and bracket notation
human = {

    fullName:"kartik",
    lastName:"",
    rollNo:23,
    age:44
}


console.log(human['age'])
console.log(human.age)
// Delete 
delete human.age
console.log(human)
// same goes for updating and adding

// ----------------------------------------------


let country={
    name:'India',
    size:54,
    Ranking:4

}
for (let keys in country){
    console.log(keys,country[keys])
}

// ---------------------------------------------

// Destructuring of array------------------->

let friends=['chetanya','thiruptik','yash','paras','anshul']
let [a,b,c,d,e]=friends
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log('----------------------')
// Destructuring of objects------------------>





let festivals={
    diwali:'lights',
    holi:'colours',
    makarsankrant:'kites'

}
let {diwali:dw,holi:hl,makarsankrant:mk}=festivals
console.log(dw)
console.log(hl)
console.log(mk)
console.log('-------------------')
// --------------------------------------



let animal={
    name:'Elephant',
    type:'Herbivorous',
    size:'big'

}

let g=Object.keys(animal)
let h=Object.values(animal)
let[x,y,z]=g
let [xx,yy,zz]=h
console.log(x)
console.log(y)
console.log(z)
console.log('------------------')
console.log(xx)
console.log(yy)
console.log(zz)
 

console.log('-----------------------')


// -------------------------------
// New way of array------>

psa=[21,69,45,78]
for(let element of psa){
    console.log(element)
}
console.log('-----------------------')

// -----------------------------------

 let member= {

    fnName:"parth",
    lnName:"tyagi",
    rollNo:55,
    favNo:4

}

for(let key of Object.keys(member)){
        console.log(key)
}
console.log('-----------------------')

for(let values of Object.values(member)){
    console.log(values)
}
console.log(Object.entries(member))

for(let [key,value] of Object.entries(member)){
    console.log(key,value)
}