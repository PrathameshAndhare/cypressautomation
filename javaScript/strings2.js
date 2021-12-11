/*  string + string ---->string
    string + number ---->string
    number + string ---->string
    number + number ---- number */
let a= 54
let b= 65
let c='cat'
console.log(a+b+c)
console.log(a+c+b)
console.log(c+b+a)

//________________________________
b = ["prathamesh","sarthak"]


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



// count specific characters in the string-->
let rr='prathamesh'
let count=0
for(let i=0;i<rr.length;i++){
    if(rr[i]=='h'){
        count=count+1
    }

}
console.log(count)



// count number of vowels--->
let cde='mississippi'
let counter=0
for (let i=0;i<cde.length;i++){
    if(cde[i]=='a'|| cde[i]=='e'|| cde[i]=='i'||cde[i]=='o'|| cde[i]=='u'){
        counter =counter +1
    }


}
console.log(counter)
//count number of vowels--->
// let abc='mississippi'
// let xyz=['a','e','i','o','u']
// let cc=0
// for(let i=0;i<abc.length;i++){
//     if(abc[i] in xyz){
//         cc =cc +1
//     }

// }
// console.log(cc)



// reverse the string--->
let psa='my name is prathamesh'
let xx=psa.split(' ')
console.log(xx)
let arrx=[]
for (let i=0;i<xx.length;i++){
    let word =xx[i]
    rev=' '
    for (let i=0;i<word.length;i++){
        rev=word[i]+rev

    }
    arrx.push(rev)

}
console.log(arrx)
console.log(arrx.join(' '))




// _______________________________________
// upper case, lowercase,
// startswith,endswith------->(will return boolean)
let hc='bolbala'
let ch=hc.startsWith('bo')
console.log(ch)

// Includes-------------->
let jaxa='europeanspaceagency'
let nasa=jaxa.indexOf('a',jaxa.indexOf('a',jaxa.indexOf('a')+1)+1)
console.log(nasa)













// Maximum value from array--->
let bb=[12,23,-100,344,55,66,77.1100]
let k=0
for(let i=0;i<bb.length;i++){
    if(bb[i]>k){
        k=bb[i]
    }
}
console.log(k)
// Lowest value from array----->
let jj=[12,23,-100,344,55,66,77.1100]
let m=0
for(let i=0;i<jj.length;i++){
    if(jj[i]<m){
        m=jj[i]
    }
}
console.log(m)

// --------------------------->




















































