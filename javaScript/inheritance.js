// class Grandfather {

//     language="Marathi"
//     constructor(first,last,age){
//         this.first=first
//         this.last=last
//         this.age=age
//     }
//     display(){
//         console.log(this.first,this.last)
//     }
// }

// // let ggg=new Grandfather('fn1','ln1',22)
// // console.log(ggg)
// // ggg.display()


// class Father extends Grandfather {
//     display(){
//         console.log('hello')
//     }

// }
// let fff = new Father("ff","11",12)
// console.log(fff)
// fff.display()

// // 1st case if child does have constructor , still we need to pass the value parent constructor



class sports {
    top='cricket'
    constructor(name,players,origin){
        this.name=name
        this.players=players
        this.origin=origin
    }
    Display(){
        console.log(this.name)
    }
}
class game extends sports {
    constructor(name,players,origin,rating,type){
        super(name,players,origin)
        this.rating=rating
        this.type=type
    }
    Display(){
        console.log(this.rating,this.type)
        super.Display()
    }

    // static search(name){

    //     switch(name){

    //         case 'one':
    //             console.log(" one results")
    //             break;
            
    //         case 'two':
    //             console.log("two results")
    //             break;

    //         case '3':
    //             console.log("3 results")
    //             break;
    //         default:
    //             break
    
    //     }

    // }


}
let CRICKET=new game('Cricket',11,'England',9.5,'outdoor')
console.log(CRICKET)
CRICKET.Display()

// CRICKET.search('two')

// ---------------------------------------------------

// let add=function(a,b,c){

//     if(a != undefined && b != undefined && c != undefined){
//         return a + b +c
//     }
//     else if(a != undefined && b != undefined){
//         return a + b
//     }
//     else{
//         console.log('Incorect input')
//     }

// }
// add(1,2)

// polymorphism --->   same method same class  different overloading 
//             ----> same method , same signature different class overriding




//overriding - same method name , same signature different class
// inheritance