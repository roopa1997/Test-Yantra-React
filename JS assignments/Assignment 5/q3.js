let form1 = document.createElement("form")
let nameLabel= document.createElement("label")
nameLabel.textContent="name"
form1.appendChild(nameLabel)
let nameInput=document.createElement("input")
nameInput.placeholder="enter your name"
nameInput.name="n"
nameInput.type="text"
form1.appendChild(nameInput)

let br1=document.createElement("br")
form1.appendChild(br1)

let ageLabel= document.createElement("label")
ageLabel.textContent="age"
form1.appendChild(ageLabel)
let ageInput=document.createElement("input")
ageInput.placeholder="enter your age"
ageInput.name="age"
ageInput.type="text"
form1.appendChild(ageInput)

let br2=document.createElement("br")
form1.appendChild(br2)

let addressLabel= document.createElement("label")
addressLabel.textContent="address"
form1.appendChild(addressLabel)
let addressInput=document.createElement("input")
addressInput.placeholder="enter your address"
addressInput.name="address"
addressInput.type="text"
form1.appendChild(addressInput)

let br3=document.createElement("br")
form1.appendChild(br3)

let dobLabel= document.createElement("label")
dobLabel.textContent="dob"
form1.appendChild(dobLabel)
let dobInput=document.createElement("input")
dobInput.placeholder="enter your dob"
dobInput.name="dob"
dobInput.type="text"
form1.appendChild(dobInput)

document.body.appendChild(form1)

form1.style.textAlign="center"
form1.style.backgroundColor="grey"
form1.style.color="white"
form1.style.fontSize="20px"
form1.style.marginLeft="40%"
form1.style.marginRight="40%"

//using innerHtml



let formElement= `
<form style="text-align: center; background-color: grey; color: white; font-size: 20px; margin-left: 40%; margin-right: 40%;">
<label>name</label>
<input placeholder="enter your name" name="n" type="text">
<br>
<label>age</label>
<input placeholder="enter your age" name="age" type="text">
<br>
<label>address</label>
<input placeholder="enter your address" name="address" type="text">
<br>
<label>dob</label>
<input placeholder="enter your dob" name="dob" type="text">
</form>
`
let htmlFormContainer = document.getElementById("a1")
htmlFormContainer.style.margin="15%"
htmlFormContainer.innerHTML=formElement
