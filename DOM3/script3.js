// Element select attribute--->
// tagName[attribute="value"]
// '.' for class and '#' for id



// For reference---
{/* <h1 class="A"> Heading</h1>
    <ul>
        <li class="a" name='First'>Jackfruit </li>
        <li id="color">Grapes</li>
        <li class="a">Orange</li>
        <li class="b">Mango</li>
        <li id="meta">Banana </li>
    </ul> */}



let heading1=document.querySelector('h1[class="A"]')
let liList=document.querySelector('li[id="color"]')
// or-->
let liListB=document.querySelector('#color')
let liListC=document.querySelectorAll('li[class="a"]')
let liListD=document.querySelector('li[class="b"]')
let liListE=document.querySelector('li[id="meta"]')
// or -->
let liListe=document.querySelector('#meta')
    
console.log(heading1,liList,liListB,liListC,liListD,liListE,liListe)
let inputText=document.querySelector('input')
let addButton=document.querySelector('button')
let ulList=document.querySelector('ul')

addButton.addEventListener('click',function(){
    let li=document.createElement('li')
    li.textContent=inputText.value
    ulList.appendChild(li).style.color='green'
    ulList.appendChild(li).style.backgroundColor='lightGreen'
})
