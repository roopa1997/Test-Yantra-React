let divtag = document.createElement('div')
let searchMoviebtn = document.getElementById("searchMoviebtn");
console.log('searchMoviebtn')
searchMoviebtn.addEventListener('click', function () {
divtag.innerHTML=""

  console.log('adding event listener')
  let search = document.getElementById('search')
  let show = search.value
  
  url = 'http://www.omdbapi.com/?s='+show+'&apikey=d0c2d96b'

 
  console.log(url);

  fetch(url)
    .then(response => response.json())
    .then(result => {
      const { Title, Poster, Search } = result
      console.log(Title, Poster)
      for (const key in Search) {
        const { Title, Poster } = Search[key]
        console.log(result)
        div1 = document.createElement("div");
        div1.className = "card float-left "
        
        const div2 = document.createElement("div");
        div2.className = "card-body"
        const img = document.createElement("img")
        img.src = Poster

        const p1 = document.createElement("p")
        p1.className = "card-text"
        p1.textContent = Title
        div2.appendChild(p1)
        div1.appendChild(img)
        div1.appendChild(div2)
        divtag.appendChild(div1)
        document.body.appendChild(divtag)

      }



    })

})
