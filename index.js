/* Enter the code to remove the main node element under this comment */
let myMain = document.querySelector('#main')
myMain.remove()

/* Create your new element here and assign it to newHeader */
let newHeader = document.createElement(h1);

newHeader.id = "victory"
newHeader.innerText = "Greg is the Champion!"
document.body.appendChild(newHeader)


