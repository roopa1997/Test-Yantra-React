function addStyle() {
    const element = document.getElementById("add")
    element.className = 'addStyle'
}

function removeStyle() {
    const element = document.getElementById("add")
    element.className = 'removeStyle'
}

const belement = document.getElementById("one")
belement.onclick = function () {
    alert('You clicked me !!!!')
}