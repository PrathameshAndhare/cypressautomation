// object does not stores the value by index------
let cars=[
    {
        name:'maruti',
        colour:'white',
        year:879,
        number:[3,2.6,4,87]

    },
    {
        name:'swift',
        colour:'gray',
        year:984,
        number:[6,5,4,8,45]

    },
    {
        name:'baleno',
        colour:'black',
        year:547,
        number:[21,65,54,87]

    }
]
// retriving  the values from the objects----
console.log(cars[0].colour)
// adding a property

for (let i=0;i<cars.length;i++){
    cars[i].code=789546

}
console.log(cars)
// deleting the value---
// delete cars[1].colour

// console.log(cars[1])


 let x=0
 for(let i=0;i<cars.length;i++){
     let obj=cars[i]
     console.log(obj.name + " " + obj['number'].length)
 }


//  duplicate keys are not inserted in objects---
//  average of numbers----------



sum=0
for(let i=0;i<cars.length;i++){
    let obj=cars[i]
    sum=sum+obj['year']
}
console.log(sum/cars.length)
console.log(cars[0].number[3])



// Counting The No. Of Persons Having Python As Skill

let Person=[{
    firstName:'Sarthak',
    lastName:'Andhare',
    Skills:['Python','JavaScript','Java']
},
{
    firstName:'Prathamesh',
    lastName:'Andhare',
    Skills:['Python','tableau','C++']
},
{
    firstName:'Chetanya',
    lastName:'Ikhar',
    Skills:['CSS','JavaScript','tableau']
}]
count=0
for(let i = 0 ; i<Person.length ; i++){
    let OBJ = Person[i]
    if(OBJ.Skills.includes('Python')){
        count+=1

    }
}
console.log(count)

// Retriving The Names Of Persons Having Tableau As Skills

let Students=[{
    firstName:'Sarthak',
    lastName:'Andhare',
    Skills:['Python','JavaScript','Java']
},
{
    firstName:'Prathamesh',
    lastName:'Andhare',
    Skills:['Python','Tableau','C++']
},
{
    firstName:'Chetanya',
    lastName:'Ikhar',
    Skills:['CSS','JavaScript','Tableau']
}]
for(let i = 0 ; i<Students.length ; i++){
    ssa = Students[i]
    if(ssa.Skills.includes('Tableau')){
        console.log(ssa.firstName)
    }
}
