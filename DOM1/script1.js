

document.write('<p> Today is tuesday </p>')
let h=document.querySelector('h1')
let p=document.querySelector('p')
let buttonA=document.querySelector('button')
console.log(h)
console.log(p)
console.log(buttonA)
buttonA.addEventListener('click',function(){
    h.style.color='yellow';
    p.style.backgroundColor="pink"

})