// let person = ['Sarthak','Andhare',14,28]
// console.log(person[0])

// let person1 = {

//     firstName:'Sarthak',
//     lastName:'Andhare',
//     Age:14,
//     RollNo:28

// }

// // Retriving The Value From The Object
// // Dot Notation
// console.log(person1.firstName)
// // Bracket Notation 
// console.log(person1['firstName'])

// // Updating The Value In The Object
// // Dot Notation
// person1.firstName = 'Prathamesh'
// console.log(person1.firstName)
// // Bracket Notation
// person1['Age'] = 18
// console.log(person1['Age'])

// // Adding The Property
// // Dot Notation
// person1.language = 'Marathi'
// console.log(person1.language)
// console.log(person1)
// // Bracket Notation
// person1['City'] = 'Nagpur'
// console.log(person1['City'])
// console.log(person1)

// // Deleting The Value From The Object
// // Dot Notation
// delete person1.RollNo
// // console.log(person1.RollNo)
// console.log(person)

// let Person2 = [{

//     firstName:'Sarthak',
//     lastName:'Andhare',
//     age:14,
//     RollNo:28


// },{

//     firstName:'Prathamesh',
//     lastName:'Andhare',
//     age:18,
//     RollNo:47

// }]
// for(let i = 0 ; i<Person2.length ; i++){
//     if(Person2[i].firstName == 'Prathamesh'){
//         console.log(Person2[i].firstName )
//     }
// }
// for(let i = 0 ; i<Person2.length ; i++){
//     if(Person2[i].RollNo == 47){
//         console.log(Person2[i].RollNo)
//     }
// }

// Function With Parameter With Return Type
function addition(a,b){
    return a + b
}
let aaj = addition(558,558)
console.log(aaj)

// Function Without Parameter And Without Return Type
function subtraction(){
    console.log(55-45)
}
subtraction()

// Function With Parametr With Return Type
function multiplication(x,y){
    return x * y
}
let aja = multiplication(56,78)
console.log(aja)

// ---------------------------------
// Function Declaration
function division(x,y){
    return x/y
}
let jaj = division(5,2)
console.log(jaj)

// Function Expression
let div = function (x,y){
    return x/y
}
let ssa = div()
console.log(ssa)