let names =["psa",'ssa','csa']
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names.length)

for(let i=0;i<names.length;i++){
    console.log(i)
    console.log(names[i])

}
// Push ---->
//action->adds the element to the last 
//return->return the new length of array
let fruits=['apple','mango','grapes']
let a =fruits.push('banana')

console.log(a)
console.log(fruits)

// Pop--->
//action->removes the element from the last
//return->returns the removed element
let b=fruits.pop()
console.log(b)
//Shift----->
//action->removes the element from the first
//return->returns the removed element
let c=fruits.shift()
console.log(c)
console.log(fruits)
//unshift----->
//action->adds the element from the first
//return->returns the new length of array
let d=fruits.unshift('papaya')
console.log(d)
console.log(fruits)

//Indexof--->
let animals=['cat ','lion','elephant']
let e=animals.indexOf('lion')
console.log(e)
//Includes---> will give true or false
//concat--->
let i =[2,3,4]
let j=[5,6,7]
let k=i.concat(j)
console.log(k)
//flat----->
let m =[[2,3,1],[6,5,4],[8,7,3]]
console.log(m[0][0])
console.log(m[1][0])
console.log(m[2][2])
let n=m.flat()
console.log(n)
//slice---->
let o=[12,25,64,8,75]
let p=o.slice(1,4)
console.log(p)
//reverse
let mm=o.reverse()
console.log(mm)






