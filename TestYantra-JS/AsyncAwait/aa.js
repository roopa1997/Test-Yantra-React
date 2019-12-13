// await keyword must be used within the function declared with asyn keyword only 
// await stops the execution and waits till it gets the response 
async function getData() {

        const response= await fetch('https://jsonplaceholder.typicode.com/todos')
        const data= await response.json()
        console.log('Data ', data)

}
getData()