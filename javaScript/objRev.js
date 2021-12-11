let students = [
    {
        firstName:"Prathamesh Andhare",
        skills:["python","javascript",'cpp'],
        parents:{
            mother:"Sakshi Andhare",
            father:"Suresh Andhare"
        },
        age:18,
        city:"Nagpur"
    },

    {
        firstName:"Chaitanya Ikhar",
        skills:["Uno","Chess",'Cricket'],
        parents:{
            mother:"Kalpana Ikhar",
            father:"Raj Ikhar"
        },
        age:16,
        city:"jaipur"
    },
    {
        firstName:"Sarthak Andhare",
        skills:["python","Cricket","html"],
        parents:{
            mother:"Sakshi Andhare",
            father:"Suresh Andhare"
        },
        age:14,
        city:"NAGPUR"
    },
    {
        firstName:"Thirupthik Naidu",
        skills:["Phataka","VolleyBall",'Mango',"Bandook"],
        parents:{
            mother:"Shanti Naydu",
            father:"Suresh Naidu"
        },
        age:14,
        city:"Vellore"
    }

]

// every returns true or false 
let hh=students.every(function(el){
    return el.age>14

})
console.log(hh)
// only belonging to NAGPUR,Nagpur city-->
students.filter((el)=>{
    return el.city==='Nagpur' || el.city==="NAGPUR"
}).forEach((el)=>{
    console.log(el.firstName)
})
// console.log(aa)
// -----------------------------------


// average age of all students-->


let ss=students.reduce((acc,el)=>{
    return acc + el.age
},0)/students.length
console.log(ss)

// serching for user with python as a skill-->

students.filter((el)=>{
    return el.skills.includes('python')
}).forEach((el)=>{
    console.log(el.firstName)
})
// Total number of skills for every user -->

let sa=students.map(function(el){
    return el.skills.length
})
console.log(sa)

// Name starting with 'P'-->
students.filter((el)=>{
    return el.firstName[0]==='P' 
}).forEach((el)=>{
     console.log(el.firstName)
})

// ----------------------


students.forEach(function(el){
    el.skills.sort()
    console.log(el.skills)
})

students.forEach(function(el){
    el.skills.shift()
    console.log(el.skills)
})


// students.forEach(function(el){
//     el.username = el.firstName.split(' ').join('-')
// })
// // ------------------------


let combine = []
students.filter(function(el){
   return el.city === "jaipur"
}).forEach(function(el){
   combine.concat(el.skills)
})
