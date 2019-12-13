console.log("Js started")

const myPromise = new Promise((resolve,reject)=>{

    if(20>10){
        const data = [100,200,300,400]
        resolve(data)
    }else{
        reject('failed to fetch data')
    }

})
myPromise.then((data)=>{
    console.log('data is :',data)
    const filteredData = data.filter(val=>val>200)
    return filteredData;
}).then(filterData=>console.log('filter data : ',filterData)
).catch(error=>console.log('error is : ',error))

console.log("JS ended")

