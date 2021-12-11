// toLowerCase(),toUpperCase(),indexOf(),startsWith(),endsWith(),slice....

// charAt()
let fullName='Sarthak Andhare'
let A = fullName.charAt(3)
console.log(A)

// charCodeAt()
console.log(fullName.charCodeAt(3))

// count of numbers
// count of capital letters
// count of small letters
// count of special symbols

let B = 'SARTHAK4326780,$$!@gdhwyevrhrndvdhn'
let csl,ccl,cn,css=0
for(let i = 0 ; i<B.length ; i++){
    if(B.charCodeAt(i)>=61 && B.charCodeAt(i)<=122){
        csl = csl + 1
    }
    else if(B.charCodeAt(i)>=65 && B.charCodeAt(i)<=90){
        ccl = ccl + 1
    }
    else if(B.charCodeAt(i)>=48 && B.charCodeAt(i)<=57){
        cn = cn + 1
    }
    else{
        css = css + 1
    }
}
console.log(csl,ccl,cn,css)

// 10 - 20 ------> 10%
// 20 - 30 ------> 20%

console.log('Please Enter The No. Of Tickets')
aa = parseInt()
if(aa >= 10 && aa<=20){
    console.log('Your Discount Is 10% And The Amount Is '+10/100*aa+''+'Rs')
}
else if(aa>=20 && aa<=30){
    console.log('Your Discount Is 20% And The Amount Is '+20/100*aa+''+'Rs')
}
else{
    console.log('You Got No Discount And The Amount Is '+aa+''+'Rs')
}

// concat

let firstName="SarthakAndhare"
let lastName="PrathameshAndhare"
console.log(firstName.concat(lastName))
console.log(firstName.lastIndexOf('a'))

let Language = "Marathi"
console.log(Language.substr(1,5))

// -------------<>-------------------
console.log("Sarthak".split('t'))

let ss = "My Name Is Prathamesh And  Prathamesh Is Studying JavaScript And My Brother's Name Is Sarthak"
let ps = ss.split("")
let BlankArr=[]
let count=0
for(let i = 0 ; i<ps.length ; i++){
    if(BlankArr.indexOf(ps[i])<0){
        BlankArr.push(ps[i])
    }
    else{
        count = count + 1
    }
}
console.log(count)
