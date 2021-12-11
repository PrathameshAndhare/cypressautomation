let i=0;
let count=0;
while(i<100){
    if (i%2==0){
        count=count+i
        console.log(i)
    }i++
}
console.log(count)

let n=641
for (let i=2;i<n;i++){
    if (n%i==0){
        console.log('Not prime')
        break;
    }
    
    else{
        console.log(' prime')
        break;
    }

}
// --------------------------------

// let z=100
// for(let i=2;i<100;i++){
//     if(i%i==0){
//         continue;
//     }
//     else{
//         console.log(i)
//     }

// }

let a=0;
let counter=0;
while(counter!=50){
    if(a%2!==0){
        counter =counter+1
        console.log(a)
    }a++
}

// While with break and continue--->
console.log('-------------')

for(let i=0;i<10;i++){
    console.log(i)
    if(i==6){
        break
    }
}


// -----------------------------------


for (var ia=0;ia<5;ia++){
    console.log(ia)

}
console.log('------')
console.log(ia)
console.log('-----')
// -----------------------


function NEW(){
    for(let o=0;o<10;o++){
        if(o==5){
            console.log(o)
            return o

        }
        
    }
}
NEW()
// ----------------

console.log('-----')



let y=0;
while(y<100){
    console.log(y)
    if(y==50){
        break;

    }y++

}

// ---------------
console.log('-----')


let z=0;
while(z<5){
    if(z==3){
        z++
        continue;
    }
    console.log(z)
    z++
}


