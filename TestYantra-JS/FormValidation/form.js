const loginButton = document.getElementById('login')
loginButton.addEventListener('click',function(){
    const userForm = document.forms['userForm']
    const userNameElement = userForm.username
    const PasswordElement = userForm.password
    const userName= userNameElement.value
    const password= PasswordElement.value
    console.log('username is ',userName)
    console.log('password is ',password)

    if(userName.trim().length>6){
    console.log("username is valid")
    }
    else{
        console.log("username is invalid")
    }
    if(password.trim().length>5){
        console.log("password is valid")
        }
        else{
            console.log("password is invalid")
        }
})