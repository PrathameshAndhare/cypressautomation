// some every--->
let age=[54,64,78]
//some--> atleast one element should satisfy the condition to return true
let k=age.some(function(el,index,arr){
    return el<60
})
console.log(k)
// every --> every element should satisfy the condition to return true 
let l=age.every(function(el,index,arr){
    return el<70
})
console.log(l)
//-------------------------------->
let psa=['prathamesh','kartik',52,8]
console.log(psa[0])
//Object does not stores the value by index
let cartoon={
    best:'Ninja Hattori and Shaun the sheep',
    worst:'Bola kampung',
    average:'Motu patlu'
}
console.log(cartoon.best)
console.log(cartoon.worst)
console.log(cartoon.average)
// Bracket notation can also be used 
//Updating the value------>
cartoon.best='Shinchan'
console.log(cartoon['best'])
// ----------------->
// Adding the property to the object
cartoon.comedy='Tom and Jerry'
console.log(cartoon)
// Deleting the property ----->
delete cartoon.average
console.log(cartoon)
//---------------->
let sports=[{
    best:'cricket',
    worst:'kho-kho'
},{
    best:'Out-out',
    worst:'Tennis'
}]
console.log(sports[0].best)
console.log(sports[1].best)
 for(let i=0; i<sports.length;i++){
     console.log(sports[i])
     let obj=sports[i]
     for(key in obj){
         console.log(key,obj[key])
     }
 }
 // Find--------->
 let g=sports.find(function(el,index,arr){
     return el.best=='cricket'

 })
 console.log(g)
 // FindIndex--->
 let gh=sports.findIndex(function(el,index,arr){
    return el.best=='cricket'
 })
console.log(gh)

