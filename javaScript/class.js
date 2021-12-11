class Person{
    fullName='unknown'
    age=18
    height=5.10
    walk(){
        console.log('I am walking')
    }
    play(){
        console.log('I am playing')
    }
}
let psa = new Person()
psa.fullName='Prathamesh'
psa.height=5.11
psa.lang='English'
// console.log(psa)

let ssa=new Person()
let ksa=new Person()
console.log(ssa)
console.log(ksa)
// updating or adding an element->
ssa.weight=50
console.log(ssa)
// ------------------------>



let game=[psa,ssa,ksa]
for (let i=0;i<game.length;i++){
    for(let keys in game[i]){
        console.log(keys,keys[i][keys])
    }
    /* or-->
    for (let [keys,values] of  Object.entries(game[i])){
        console.log(keys,value)
    }*/
}

class city {
    constructor(name,state,lang){
        this.name=name
        this.state=state
        this.lang=lang
    }
}
let n=new city('nagpur','maharashtra','marathi')
let t=new city('chennai','Tamil Nadu','Tamil')
console.log(n)
console.log(t)
let cc=[n,t]
cc.forEach(function(el){
    for(let [key,value] of Object.entries(el)){
        console.log(key,value)
    }
})