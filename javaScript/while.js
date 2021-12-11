let numOfTickets=prompt('Enter a number')
numOfTickets=Number(numOfTickets)
if (numOfTickets<=10){
    console.log('Total discount is 10%')
}
else{
    console.log('Total discount is 20%')

}

if (numOfTickets<=10){
    console.log('Total discount is 10%')
}
if (numOfTickets>10){
    console.log('Total discount is 20%')
}



if (numOfTickets<=10){
    console.log('Total discount is 10%')
}
else if (numOfTickets<=10){
    console.log('Total discount is 20%')
}

// TERNARY OPERATOR--->
// ?->True,:->False


let psa=numOfTickets <=10 ? "10% discount" :"20% discount"
console.log(psa)

/* Truthy values--> -1,1,'1','q','A',45,54!=='54'
Falsy values--->0,null,undefined,8!==8,!True*/



// switch case-->


let city =prompt('Enter the city')
switch(city){
    case 'Nagpur':
        console.log('Maharashtra')
        break
    case 'Bangalore':
        console.log('Karnataka')
        break
    case 'Hyderabad':
        console.log('Telangana')

    default:
        console.log('Please select a proper city')
}

// If break is not written after case , every case after that case followed by other case will be executed skipping the cases which contains break .


//for(intialization ; conditionCheck ; increment/decremt){
    //console.log('hello')
//}


//Math.random()

Math.floor(88.4) 
Math.ceil(13.4)
Math.round(4.9)
Math.round(4.4)
