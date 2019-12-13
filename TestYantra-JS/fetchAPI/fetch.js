console.log("js starts here")
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(function (json) {
    // let userid,id,title,completed, parsedobj
    //let arr=[]
    for (let key in json) {
      console.log("before destructuring ", json[key])
      let { userId, id, title, completed } = json[key]
      console.log(userId, id, title, completed )
      //  arr.push(userid)
      //  arr.push(id)
      //   arr.push(title)
      //   arr.push(completed)
      //   console.log(arr)
      //   for(let k in arr){
      //       console.log(arr[k])
      //      var p  = document.createElement('p')
      //  p.textContent=arr[k]
      //  document.body.appendChild(p)
      //create a col-md-4 div class
      let div1 = document.createElement('div')
      div1.className = "card"
      let div2 = document.createElement('div')
      div2.className = 'card-body'
let img= document.createElement('img')
img.src="./Batam-Island.jpg"
let p1 = document.createElement('p')
p1.className="card-text"
p1.textContent="userid is"+userId 

let p2 = document.createElement('p')
p2.className="card-text"
p2.textContent="id is"+id 

let p3 = document.createElement('p')
p3.className="card-text"
p3.textContent="title is"+title
let p4 = document.createElement('p')
p4.className="card-text"
p4.textContent="completed is"+completed

div2.appendChild(p1)
div2.appendChild(p2)
div2.appendChild(p3)
div2.appendChild(p4)

div1.appendChild(div2)





      
      
      document.body.appendChild(div1)


    }










  })


