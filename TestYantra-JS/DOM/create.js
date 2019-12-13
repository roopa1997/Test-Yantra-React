let element = document.createElement("p")
element.textContent = "JavaScript is easy"
console.log(element)
document.body.appendChild(element)

const ulElement = document.createElement("ul")
ulElement.textContent = "Lipsticks"
const li1Element = document.createElement("li")
li1Element.textContent = "Lakme"
const li2Element = document.createElement("li")
li2Element.textContent = "Loreal"

ulElement.appendChild(li1Element)
ulElement.appendChild(li2Element)
console.log(ulElement)
document.body.appendChild(ulElement)

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


const names = ["a", "b", "c", "d", "e"]
for (var j = 0; j < names.length; j++) {
    var btn = document.createElement("button")
    btn.textContent = names[j]
    document.body.appendChild(btn)
}



let items = `
<ul>
    <li>A</li>
    <li>B</li>
</ul>
`
let divElement=document.getElementById("test")
divElement.innerHTML=items

// if we use textContent

