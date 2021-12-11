// function inside a function parent function variable,accessible in child function 
let e=62
let d=26
function add(){
    let a=15
    let b=32
    console.log(a+b)
    console.log(e+d)
    // parent function does not have access to child function variable
    function addTwo(){
        let e=26
        let d=46
        console.log(a+b+e+d)
        function addThree(){
            let i=77
            let u=46
            console.log(a+b+d+e+i+u)
        }
        addThree()

    }
    addTwo()


}
add()


function addY(){
    return 5+6
    console.log('hello') /* statements after return are not executed */
}
let ttt=addY()
console.log(ttt)


//  CLOSURE------>
function addThreeB(){
    let xx=54
    let qq=63
    return function(){
        console.log(xx+qq)
    }
    return {
        first:function(){
            console.log("Hello")
        },
        second:function(){
            console.log("HELLO")
        }
    }
}
let www=addThreeB()
console.log(www())
