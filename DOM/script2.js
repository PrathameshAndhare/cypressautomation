
alert('psa')
let list=document.querySelectorAll('li')
let input=document.querySelector('input')
let button=document.querySelector('button')
let p=document.querySelector('p')
button.addEventListener('click',function(){
    for(let i=0;i<list.length;i++){
        if(i%2!==0){
            list[i].style.color="blue"

            
        }
        else{
            list[i].style.color=input.value
        }
    }

})