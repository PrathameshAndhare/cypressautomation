let months=['march','april','july' ,'december','january']
let first=months[0]
let second=months[1]
let third=months[2]
console.log(first)
console.log(second)
console.log(third)


//----------destructuring---=----
// destructuring of array--->


let [four,five,six]=months
console.log(four)
console.log(five)
console.log(six)


// ----------------------------

let year=[2002,[5114,65212],8545]
let aa=year[0]
let bb=year[1]
let cc=year[2]
console.log(aa,bb,cc)

let [ff,[dd,gg],ee]=year
console.log(ff)
console.log(dd)
console.log(ee)
console.log(gg)

// destructuring of objects---->
let cartoon={
    best:'Ninja Hattori',
    worst:'Kemonache',
    average:'MotuPatlu',
    ChNo:452
}
let {best:bst,worst:wrs,average:avg,ChNo:cn}=cartoon
console.log(bst)
console.log(wrs)
console.log(avg)
console.log(cn)


// --------------------------------
let lotus = {
    firstName:"parth",
    lastName:"tyagi",
    rollNo:12,
    parent:{
        mother:'mahila',
        father:'jaywardhane'
    }
}

let {firstName:fnn,lastName:lnn,rollNo:rnn,parent:{mother:m,father:f}} = lotus
console.log(fnn)
console.log(lnn)
console.log(rnn)
console.log(m)
console.log(f)

// ----------------------->


let fastrack = {
    fullName:"psa",
    rollNo:12,
    skills:["python","java","c#"],
    siblings:{
        
        brother:"parth"
    }
}
let {fullName:fn,rollNo:rn,skills:[q,w,e],siblings:{brother:b}} = fastrack
console.log(q)
console.log(w)
console.log(e)
console.log(fn)
console.log(rn)

console.log(b)


let saa = ["apple",{"firstName":"jakas","lastName":"mast"},true,["c","cpp"]]
let[app,{firstName:vbn,lastName:lnm},kk,[qa,ws]]=saa
console.log(app,vbn,lnm,kk,qa,ws)

//----------------->



let INDIA = {
    "maharashtra":"mumbai",
    "uttarpradesh":"lucknow",
    "rajasthan":"jaipur",
    "Meghalaya":"shillong",
    "Assam":"dispur",
    "Nagland":"kohima"
}

function displayCity(obj){
    return INDIA
}
let {maharashtra:MH,rajasthan:RJ} = displayCity(INDIA)
console.log(MH)
console.log(RJ)

let transacrions = [14525,782875,10002021,215525654524444,55555451444]

function displayTransc(arr){
    return arr
}
let [aaaa,bbbb,cccc,dddd] = displayTransc(transacrions)
console.log(aaaa)
console.log(bbbb)
console.log(cccc)
console.log(dddd)