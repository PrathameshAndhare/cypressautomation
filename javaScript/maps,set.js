// let r='prathamesh'
// console.log(`My name is ${r}`)
// // ------------------------


// let x=20
// let y=40
let days=[1,2,3,4,5,6,7]
let names=['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
let g={}
for (let i=0;i<days.length;i++){
    g[`Day ${days[i]}`]=names[i]
}
console.log(g)


// -----------------------------------
let person={}
let objA={
    "data":[
        {
            "id":4,
            "email":"prathameshandhare04@gmail.com",
            "game":'cricket'
        },
        {
            "id":5,
            "email":"sarthakandhare19@gmail.com",
            "game":'chess'
        },
        {
            "id":6,
            "email":"chetanyaikhar@gmail.com",
            "game":'badminton'
        }
    ]
}
for (let i=0;i<objA.data.length;i++){
    person[`${objA.data[i]["id"]}`]=`${objA.data[i]["email"]}`

}
console.log(person)
// --------------------------------------------
// Map --->
let b=[1,2,3]
let xyz=new Map()
xyz.set(true,'hello')
xyz.set([1,2,3],'hello')
xyz.set(b,'hello')
console.log(xyz.keys())
console.log(xyz.values())
console.log(xyz.entries())
console.log(xyz)

// xyz.clear()
// console.log(xyz)
console.log(xyz.has(true))
console.log(xyz.has(b))

// ---------------------------------------------------------------------------------
console.log('----------------------')
let colours=['blue','orange','black']
// for(let i=0;i<colours.length;i++){
//     console.log(colours[i])

// }
for(let h of colours){
    console.log(h)
}
// -----------------------------------


let human={
    dob:22042000,
    about:'hello'
}
for(let j of Object.values(human)){
    console.log(j)

}
//  same goes for values and entries---



// -----------------------------------------------
let k=[
    ['fullname','psa'],['age',18]
]
for(let [keys,values] of Object.entries(human)){
    console.log(keys,values)
}
// --------------------------



let questions={
    'capital of India':'a',
    'capital of Japan':'b',
    'capital of Sri Lanka':'c',
    'capital of USA':'d',
}
let answers=[]
let correct=0
for(let questions of Object.values(questions)){
    let userinput=prompt(questions)
    answers.push(userinput)
}
let actualanswer=Object.values(questions)
for (let i=0;i<actualanswer.length;i++){
    if(actualanswer[i]===answers[i]){
        correct=correct+1
    }
}
console.log(correct)
