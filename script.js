'use strict'
const numberAndOperationButtons = document.querySelectorAll('.btn');
let currentOutputElement = document.querySelector('.current-output');
const equalButton = document.querySelector('.btn-equal');
const clearAllButton = document.querySelector('.clear-all-btn');
const deleteButton = document.querySelector('.btn-delete')

const appendOperands = (data)=> {
    currentOutputElement.innerHTML += data;
}

const compute = ()=> {
    const result = eval(currentOutputElement.innerHTML)
    return result
}

const displayResult = ()=> {
    currentOutputElement.innerHTML = compute()
}

const clearAll = () => {
    currentOutputElement.innerHTML = ''
}

const deleteChar = ()=> {
    currentOutputElement.innerHTML = currentOutputElement.innerHTML.slice(0,-1)
}




numberAndOperationButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if (button.innerHTML == '.' && currentOutputElement.innerHTML.includes('.') ) return;
        appendOperands(button.innerHTML)
    })
})
equalButton.addEventListener('click',displayResult)
clearAllButton.addEventListener('click',clearAll)
deleteButton.addEventListener('click',deleteChar)