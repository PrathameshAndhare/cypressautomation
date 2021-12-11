// function without  parameter and without return type 
// function add(){
//     console.log(7+9)

// }
// add()
// add()

// function with parameter and without return type 

// function add(x,y){
//     console.log(x+y)
// }
// add(12,13)
// add(23,24)


// function with return type and with parameter 
// function mul(x,y){
//     return x * y
// }

// let r = mul(12,13)
// console.log(r)
// console.log(8*5)

//---------------------->

// Type  of function 

// function declaration
// function expression 
// arrow 



// function declaration
function add(x,y){
    return x * y
}
add(12,13)


// function expression

// let add = function (x,y){
//     return x * y
// }
// add(12,13)


// // arrow function 

// let add =  (x,y) => {
//     return x * y
// }
// add(12,13)

// // arrow function 

// let add =  (x,y) => x * y
// add(12,13)


//--------------Array 


let y = [12,33,44,55]

// y.pop() // return   same element
// y.push(4) // new length
// y.shift() // return same element 
// y.unshift('r') // return new length
// y.slice(2,3) // array  (not included)
// y.splice(1,2,33,44) // returns removed 
// let f = [1,2,3,4,5]
// f.splice(2,2,'r','r') // [1,2,"r","r",5]
// f.fill(undefined,1,3) // [1,undefined,undefined,undefined,'5']



// map , filter , reduce , forEach , find , findIndex ,every , some

let j = [12,3,55]

// for(let i = 0 ; i < j.length;i++){
//     console.log(j[i])
// }

console.log(j.map((el)=> el + 2 )) // [14,5,57]
console.log(j.filter((el)=> el > 3 )) // [12,55]
console.log(j.reduce((acc ,el)=> acc + el ),0)// 70
j.forEach((el)=>console.log(el+1))
// 13
//4
//56

j.find((el)=> el > 1) //12
j.findIndex((el)=> el > 1) // 0
j.some((el)=> el > 33) // true
j.every((el)=> el > 0) // true

// let a = ['chinmay','deshpand'] //cd
// a.map((el)=> el[0]).join(' ') // 'cd'
console.log([1,2,3].join('-'))// string

// reverse
// concat
// indcludes
// indexOf
// lastIndexOf
// sort 

// function 


// JSON 


// let person = {
//     "fullName":23
// }

let human = {
    age:10,
    fullName:"chinmay",
    age:23
}

console.log(human)


// [] and . notation 


// retrive 
console.log(human['age'])
// update
human['age'] = 20
// add 
human['language'] = "marathi" 
// del 
delete human['language']

// loop 

// object does not stores the value by index

let human = {
    age:10,
    fullName:"chinmay",
}

for(let key in human){
    console.log(key ,human[key])
}

// new way to loop

// let students = [ 
//     {
//         fullName:"chinmay",
//         age:12
//     },
//     {
//         fullName:"amol",
//         age:23
//     }

// ]

// 

// for(let r of students){
//     //console.log(r)
//     for(let [key,value] of Object.entries(r)){
//         console.log(key,value)
//     }
// }



// struture ... destructure 


let a = [1,2,3,4]
let [aa,bb,cc,dd] = a
console.log(aa,bb,cc,dd)

let person = {age:12,language:"marathi"}

let {age,language} = person
let {age:ag,language:ln} = person
console.log(ag,ln)


// let person = {
    
//     fullName:"chinmay",
//     age:23,
//     language:["marathi","hindi"],
//     skills:["c","python"],
//     parent:{
//         father:"shirish",
//         mother:'kanchan'
//     }
// }

// let {fullName:fn,age:ag,language:[a,b],skills:[aa,bb],parent:{father:fa,mother:mt}}= person

// spread , rest

// let h = [3,4,5,67,88,99]

// function add(a,b){
//     return a + b
// }
// add(...h)

// function add(...arr){
//     return arr.reduce((acc,el)=>acc+el,0)
// }
// add(1,3,3,4,6,7,8,9,9,0,0)

// -------------------------->

// this 



// let human = {

//     fullName:"chinmay",
//     age:23,
//     display:function(){
//         console.log(this.age)  //  23 // this --- human

//         let add = function(){
//             console.log(this.age) // not defined // window
//         }
    
//         add()
//     }

// }
// human.display()

// var  age = 10
// let human = {

//     fullName:"chinmay",
//     age:23,
//     display:function(){
//         console.log(this.age)  // 23 

//         let add = ()=>{
//             console.log(this.age) //  23
//         }
    
//         add()
//     }

// }
// human.display()


// var  age = 10
// let human = {

//     fullName:"chinmay",
//     age:23,
//     display:()=>{
//         console.log(this.age)  //10

//         let add = ()=>{
//             console.log(this.age) // 10
//         }
    
//         add()
//     }

// }
// human.display()

// Lexical scope

let add = function(){

    let a =10 
    let b = 30

    console.log(a)
    console.log(b)
    //console.log(c)



    function add (c,d){
        console.log(c+d+a+b)

        function add2(){
            let r = 33 
            let yy = 55
            console.log(r+yy+a+b+c)
        }
        
        add2()

    }

    add(12,13)


}

add()