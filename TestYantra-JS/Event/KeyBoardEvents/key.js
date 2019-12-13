const element =document.getElementById("one")
element.onkeydown=function(){
console.log('triggered')
}

// writing using event listener

const p = document.createElement("p")


const second = document.getElementById("two")
second.addEventListener('keyup',function(){
   const ip=document.getElementById("takeip") 
   // ip.textContent=second.value
   ele.textContent=second.value
})

const third=document.getElementById("three")
third.addEventListener('keyup',function(){
    p.textContent=third.value
    document.body.appendChild(p)
})

