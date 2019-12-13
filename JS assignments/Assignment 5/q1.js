// using unordered list
const ulElement = document.createElement("ul")
ulElement.textContent = "Watches"
const li1Element = document.createElement("li")
li1Element.textContent = "Titan"
const li2Element = document.createElement("li")
li2Element.textContent = "Sonata"
const li3Element = document.createElement("li")
li3Element.textContent = "Ragas"

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)
ulElement.appendChild(li3Element)
document.body.appendChild(ulElement)
ulElement.style.color="green"
ulElement.style.fontSize="19px"
ulElement.style.fontStyle="italic"
li1Element.style.color="red"
li2Element.style.color="blue"
li3Element.style.color="red"
li1Element.style.fontStyle="italic"
li2Element.style.fontStyle="italic"
li3Element.style.fontStyle="italic"



// using inner html

let items = `
<ul style="color: green; font-size: 19px; font-style: italic;">Watches
<li style="color: pink; font-style: italic;">Titan</li>
<li style="color: blue; font-style: italic;">Sonata</li>
<li style="color: orange; font-style: italic;">Ragas</li></ul>
`
let divElement=document.getElementById("test")
divElement.innerHTML=items

// ordered list

const olElement = document.createElement("ol")
olElement.textContent = "watches"
const li1ele = document.createElement("li")
li1ele.textContent = "sonata"
const li2ele = document.createElement("li")
li2ele.textContent = "titan"
olElement.appendChild(li1ele)
olElement.appendChild(li2ele)

console.log(olElement)
document.body.appendChild(olElement)
li1ele.style.color="red"
li2ele.style.color="blue"
let item = `
<ul style="color: green; font-size: 19px; font-style: italic;">Watches
<li style="color: pink; font-style: italic;">Titan</li>
<li style="color: blue; font-style: italic;">Sonata</li>
<li style="color: orange; font-style: italic;">Ragas</li></ul>
`
let divEle=document.getElementById("test")
divEle.innerHTML=item

