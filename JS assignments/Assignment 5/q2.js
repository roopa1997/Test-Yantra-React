let tableElement= document.createElement("table")
let trHeading=document.createElement("tr")
let th1 = document.createElement("th")
th1.textContent="name"
trHeading.appendChild(th1)

let th2 = document.createElement("th")
th2.textContent="age"
trHeading.appendChild(th2)

let th3 = document.createElement("th")
th3.textContent="addrress"
trHeading.appendChild(th3)

let th4 = document.createElement("th")
th4.textContent="DOB"
trHeading.appendChild(th4)
tableElement.appendChild(trHeading)

let tr1 = document.createElement("tr")
let tdn1 = document.createElement("td")
tdn1.textContent="roopa"
tr1.appendChild(tdn1)

let tda1= document.createElement("td")
tda1.textContent="22"
tr1.appendChild(tda1)

let tdad1 = document.createElement("td")
tdad1.textContent="bangalore"
tr1.appendChild(tdad1)

let tddob1 = document.createElement("td")
tddob1.textContent="24/06/1997"
 tr1.appendChild(tddob1)
tableElement.appendChild(tr1)
 document.body.appendChild(tableElement)

 let ele = `
 <table>
 <tr>
 <th>name</th>
 <th>age</th>
 <th>addrress</th>
 <th>DOB</th>
 </tr>
 <tr>
 <td>sunitha</td>
 <td>22</td>
 <td>bangalore</td>
 <td>4/06/1997</td>
 </tr>
 </table>
 `
let divEl=document.getElementById("tablediv")
divEl.innerHTML=ele

