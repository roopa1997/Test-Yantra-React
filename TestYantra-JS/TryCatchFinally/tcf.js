// await keyword must be used within the function declared with asyn keyword only 
// await stops the execution and waits till it gets the response 
async function getData() {
      console.log('getData function started')
        
      try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await response.json()
                console.log('Data ', data)
        }catch(err){
                console.log('Error ', err)
        }
        console.log('getData function ended')

}
getData()