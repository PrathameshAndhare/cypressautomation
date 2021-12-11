let names =['psa','ssa','csa']
console.log(names[0])
for(let i=0;i<names.length;i++){
    console.log(i)
    names[i]

}
//foreach--->
names=['ram','shyam','aam']
let r=names.forEach(function(el,index,arr){
    console.log(el,index,arr)
})
console.log(r)
// map----> 
/* loop over every element and action
return array ------->*/
let ages =[1990,1985,1963,1786]
let calage=[]
for(let i=0;i<ages.length;i++){
    let g=2021-ages[i]
    calage.push(g)

}
console.log(calage)
let rrr=ages.map(function(el,index,arr){
    return el>33
})
console.log(rrr)
console.log(calage)
let above33=[]
for(let i=0;i<calage.length;i++){
    if(calage[i]>33){
        above33.push(calage[i])
    }
}
console.log(above33)
/* filter--->
filters out element from array and returns array */
let y=calage.filter(function(el,ndex,arr){
    return el>33

})
console.log(y)
let num=[1,2,3,4,5,6]
let sum=0
for(let i=0;i<num.length;i++){
    sum=sum+num[i]

}
console.log(sum)
let rr= number.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(rr)

let aa = [900,15,3,-182,-13]
let h =aa.filter(function(el,index,arr){
    return el < 0
}).reduce(function(acc,el){

    return acc + el

},0)
console.log(h)

