// Maximum and minimum from array---->

let h=[71,65,-89,985,58,-689]
let max=h[0]
let min=h[0]
for (let i=0;i<h.length;i++){
    if(h[i]>max){
        max=h[i]
    }
    else if (h[i]<min){
        min=h[i]
    }
}
console.log(max)
console.log(min)



// Number of duplicate values---->
let x=[44,47,65,58,68,44,44]
let userInput=44
let count =0
for(let i=0;i<x.length;i++){
    if (x[i]==userInput){
        count=count+1

    }
}
console.log(count)
// or --->

let y=x.filter(function(el,index,arr){
    return el==userInput
})
let r=y.length
console.log(y)

// ---------------------
// 4a3b2c

// 

let yy='sarthak'
console.log(yy[0].toUpperCase()+yy.slice(1).toLowerCase())



// slice(startingPoint,endpoint(Not included))
