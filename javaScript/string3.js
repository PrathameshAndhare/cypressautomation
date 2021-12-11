// let aa ;
// if(a=2){
//     console.log("Hello")
//     console.log(aa)
// }

// if(88!=88){
//     console.log('Hi')
// }
// else{
//     console.log('Hello Hi')
// }

// if(33!==33){
//     console.log('Hi Hi Hi Hi Hi')
// }
// else{
//     console.log('Hello')
// }

// // Truthy Value And Falsy Value
// // Truthy Value----->'Special Symbol,integer:
// // Falsy Value------> 0,null,undefined,8888>10000004

// if('#'){
//     console.log('psa')
// }
// else{
//     console.log(ssa)
// }

// let ab='aaabacadaeafagahaiaj'
// let aw ;
// let ar ;
// if(aw=ab.indexOf("a",indexOf('a')+1)){
//     ar=ab.indexOf('a',aw+1)
// }
// console.log(ar)

// if('@@@@@@@@@#@$!%^&'){
//     console.log('@@@@@@@@@#@$!%^&')
// }
// else{
//     console.log('.')
// }

// // Short Circuting(&& Operator):
// let afa = 8 && 8>6 && 5>4
// console.log(afa)

// let bsb = -5 && 4<3 && null
// console.log(bsb)

// // Short Circuting(|| Operator):

// let rar = 0 || 8 || true
// console.log(rar)

// // Printing All Index Of 'a':

// let qaq = 'abacadaeafagahaiajakalamanaoapaqarasatauavawaxayaz'
// for(let i = 0 ; i < qaq . length ; i++){
//     if(qaq[i] =='a'){
//         console.log(i)
//     } 
// }

let s = "4a3b2c"

console.log(s)

console.log("---------------------------")

let aa = []
let a
let b
let c

let a2 = []
let b2 = []
let c2 = []


// seperate the stri


for (let i = 0; i < s.length; i++) {
    aa.push(s[i])
}

console.log(aa)

console.log("---------------------------")

// converting string into Number

a = Number(aa[0])
b = Number(aa[2])
c = Number(aa[4])

a1 = aa[1]
b1 = aa[3]
c1 = aa[5]

//  multiply the word with number

for (i = 0; i < a.valueOf(a.length); i++) {
    a2.push(a1)
}
for (i = 0; i < b.valueOf(b.length); i++) {
    b2.push(b1)
}
for (i = 0; i < c.valueOf(c.length); i++) {
    c2.push(c1)
}
let j=a2.concat(b2)
 j=j.concat(c2)

 console.log(j.join())

