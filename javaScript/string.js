
console.log('Hello i am new to js')
console.log("Hello i am new to js")
console.log('hi this is "quote" ')
console.log("hi this is quote's ")

//-------------------------------->


let fullName = "Prathamesh Andhare"
let age = 18 
console.log("My name is "+fullName+" My age is "+age)
// string literals 
console.log(`My name is ${fullName} and My age is ${age}`)
console.log(`My name is ${fullName} and My age is ${8>9}`)
console.log('15')
console.log(15)


//  
// string + string --> string 
// string + number --> string
// number + number --> number
// number + string --> string


// string stores the value by index

let b = "sarthak"



console.log(b[0])
console.log(b[3])

for(let i = 0 ; i < b.length ; i++){
    //console.log(i)
    console.log(b[i])
}
for(let i = b.length-1 ; i >=0 ; i--){
    //console.log(i)
    console.log(b[i])
}

//---------------------------->

let v = "prathamesh"
let ra = ""


for(let i = 0 ; i < v.length ; i++){
    ra = v[i] + ra  
}
console.log(ra)

for(let i = 0 ; i < v.length ; i++){
    ra =  ra + v[i]  
}
console.log(ra)