
//create table
let table = document.createElement("table")
// get clicked id
let add = document.getElementById('add')
// add event listener
add.addEventListener('click', function () {

    const getForm = document.forms['userForm']
    const gotName = getForm.todo
    const value = gotName.value

    let row = document.createElement("tr") 
    row.style.backgroundColor="grey"
    row.style.color="white"
    let col = document.createElement("td")
    col.textContent=value  

     row.appendChild(col)

    table.appendChild(row)
    document.body.appendChild(table)

    row.onclick=function(){
        row.style.backgroundColor="green"
    }
    row.ondblclick=function(){
        row.remove()
    }

})