function outer(){
    let num =10
    function inner(){
        console.log("number: ",num)
        num++
        
    }
    
    return inner;
}

let innerFun = outer();
// inner()
// this returns an error as inner function is made closure
innerFun();
innerFun();
innerFun();