let randomNumber =Math.floor(Math.random()*6 )+1
let userInput=Number(prompt('Guess the number '))
if(randomNumber==userInput){
    console.log('You guess it correct')
}
else{
    console.log('You guess it wrong')
    userInput=Number(prompt('Guess the number '))
}
// For loop-->


let randomNumber =Math.floor((Math.random()*6 )+1)

console.log(randomNumber)

for(let i=0;i<5;i++){
    let userInput=Number(prompt('Guess the number '))

    if(randomNumber==userInput){
        console.log('You guess it correct')
        break;
    }
    else{
        console.log('You guessed incorrect')
    }
}

// for loop runs at definite number of times 

// while loop-->

let randomNumber =Math.floor((Math.random()*6 )+1)
let userInput=Number(prompt('Guess the number '))
while(userInput!=randomNumber){
    userInput=Number(prompt('Guess the number '))

}

let randomNumber =Math.floor((Math.random()*6 )+1)
let i=0
while(i<2){
    let userInput=Number(prompt('Guess the number'))
    if(randomNumber==userInput){
        console.log('Correct')
        break;
    }
    else{
        console.log('incorrect')
    }
    i++

}