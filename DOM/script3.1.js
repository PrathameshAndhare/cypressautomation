let inputText=document.querySelector('input')
let Button=document.querySelector('button')
let ulList=document.querySelector('ul')

function createButtons(li,buttonName){
    let up =document.createElement('button')
    up.textContent='up'
    up.classList='up'
    li.appendChild(up)

    let down =document.createElement('button')
    down.textContent='down'
    down.classList='down'
    li.appendChild(down)

    let remove =document.createElement('button')
    remove.textContent='remove'
    remove.classList='remove'
    li.appendChild(remove)
    
}
addButton.addEventListener('click',()=>{
    let li=document.createElement('li')
    li.textContent=input.value
    createButtons(li,'up')
    createButtons(li,'down')
    createButtons(li,'remove')
    ulList.appendChild(li)
    
})