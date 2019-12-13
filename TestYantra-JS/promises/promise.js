console.log("JS started")

const myPrimise = new Promise(function(resolve,reject){

    if(20>10)
{
    resolve("20 is greater than 10")
} else{
    reject("20 is not greater than 10")
}
})

myPrimise.then(function(success){
    console.log('success: ',success)
}).catch(function(error){
    console.log('error: ',error)
})

console.log("JS ended")