let pElement = document.getElementById("demo")
let pText = pElement.textContent
console.log(pElement)
console.log(pText)
pElement.textContent = "hi Everone"
console.log(pElement.textContent)
console.log("==============================")

let testElement = document.querySelector(".test")
console.log(testElement)
let content = testElement.textContent
console.log(content)

console.log("=====================")
let testelements = document.getElementsByClassName("test")
console.log(testelements)
for (let element of testelements) {
    if (element.textContent === "facebook") {
        element.textContent = "instagram"

    }
    console.log(element.textContent)
}

console.log("================")
let h2Elements=document.querySelectorAll("h2")
console.log(h2Elements)


for(let e of h2Elements){
    let ele=e.textContent
    let arr = ele.split(" ")
    e.textContent=arr.join("-")
    console.log(e.textContent)
}
console.log("+++++++++++++++")
let tagElements= document.getElementsByTagName("h3")

console.log("tag name ",tagElements)
for(let te of tagElements)
{
    console.log(te)
}
console.log("+++++++++++++++")
let nameEle = document.getElementsByName("founder")
for(let ne of nameEle)
{
    console.log(ne.textContent)
}
//prints message onto the web page 
document.write("good afternoon")
