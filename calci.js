let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button');//this will take the button value on screen
let string = ''
//an empty string which we update according top our need
//running a loop  so whenever we click button it willl add on string
buttons.forEach(i => {
    i.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (b.target.innerText == 'AC') {
            // string = '';
            inputBox.value = '';
        }
        else if (b.target.innerText == "DEL") {
            string = string.substring(0, string.length - 1)
            inputBox.value = string;
        }
        else if (b.target.id == 'pm') {
            string = String(-eval(string))
            inputBox.value = string;
        }
        else {
            string += b.target.innerText
            inputBox.value = string;
        }
    })
})

