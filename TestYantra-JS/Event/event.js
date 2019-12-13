function greet() {
    alert('welcome to JavaScript class')
}
const pElement = document.createElement("p")

function elementCreation() {

    pElement.textContent = "hi element created"
    document.body.appendChild(pElement)
}

function showData(){
    const ele =document.getElementById('show')
    console.log(ele.textContent)
}