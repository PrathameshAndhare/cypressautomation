// function addMe(){
//     console.log('Hello')
//     alert('Hello  --')
//     console.log(33-90)

// }
// addMe()
// let rr=document.querySelector('img')


// function demo(){
//     setTimeout(()=>{
//         console.log('Welcome 1')
//     },2000)
//     console.log('Namaste')
//     console.log('Jai maharashtra')
// }

// demo()

// setTimeout(()=>{
//     console.log('1st second passed ')
//     setTimeout(()=>{
//         console.log('2nd second passed ')
//         setTimeout(()=>{
//             console.log('3rd second passed')
//         },3000)
//     },6000)
// },10000)


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