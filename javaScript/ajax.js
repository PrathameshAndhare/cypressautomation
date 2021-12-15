function addMe(){
    console.log('Hello')
    alert('Hello  --')
    console.log(33-90)

}
addMe()
let rr=document.querySelector('img')


function demo(){
    setTimeout(()=>{
        console.log('Welcome 1')
    },2000)
    console.log('Namaste')
    console.log('Jai maharashtra')
}

demo()

setTimeout(()=>{
    console.log('1st second passed ')
    setTimeout(()=>{
        console.log('2nd second passed ')
        setTimeout(()=>{
            console.log('3rd second passed')
        },3000)
    },6000)
},10000)


// promises---->

let prom1=new Promise((resolve,reject)=>{
    const x=50
    const y=60
    if (x==50){
        resolve()
    }
    else {
        reject()
    }
})
// promise always consumes 

prom1.then(function(){
    console.log('Hello I am resolved ')
},function(){
    console.log('Hello I am rejected')
})
// .then() contains two parameters , if only one parameter is there then it is resolve() if two parameters are there then reject is chosen
// Or

prom1.then(function(){
    console.log('Hello I am resolved ')
}).catch(()=>{
    console.log('Error occured')
    
})

// ------------------------------------------

let pro =new Promise((resolve,reject)=>{
    const a ="HELLO"
    const n = "hello"
    if (a==n){
        resolve()
    }
    else{
        reject()
    }
})
// .then() block runs when condition is true ie. resolve
// .catch() will run when the condition is false
// .finally() will run everytime 
pro.then(()=>{
    console.log('Resolve is executed');
})
.catch(()=>{
    console.log("Error block")
})
.finally(()=>{
    console.log('This is finally')
})

// -------------------------------------


let prom= new Promise((resolve,reject)=>{
    reject("This promise is rejected")
})
prom.then((msg)=>{
    console.log(msg)
})
.catch((msg)=>{
    console.log(msg)
})

// -----------------------------------------

let promise2 = new Promise(function(resolve,reject){
    if(1 == 2){
       resolve([11,22,33])
   }
   else{
       reject({fullName:'chinmay deshpabde',age:23})
   }

})
promise2.then(()=>{
    console.log('Not a error ')
},()=>{
    console.log('Error')
})
.catch(()=>{
    console.log('catch me if you can')
})
.finally(()=>{
    console.log('I will run anyway')
})
