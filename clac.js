let inputBox = document.getElementById('inpt')
let buttons = document.querySelectorAll('button')
let content = " "
let arr = Array.from(buttons)
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            content = eval(content)
            inputBox.value = content
        }
        else if (e.target.innerHTML == "AC") {
            content = " "
            inputBox.value = content
        }
        else if (e.target.innerHTML == "DEL") {
            content = content.slice(0, -1)
            inputBox.value = content
        }
        else {
            content += e.target.innerHTML
            inputBox.value = content
        }
    })
})