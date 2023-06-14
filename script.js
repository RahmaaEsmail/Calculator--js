'use strict'
const numberAndOperationButtons = document.querySelectorAll('.btn');
const currentOutputElement = document.querySelector('.current-output');
const equalButton = document.querySelector('.btn-equal');
const clearAllButton = document.querySelector('.clear-all-btn');
const deleteButton = document.querySelector('.btn-delete')

const appendOperands = (data) => {
    currentOutputElement.innerHTML += data;
    removeZeroFromStart(data)
}

const removeZeroFromStart = (str) => {

    while (str[0] === '0') {
        str = str.substring(1)
    }
    return str
}

const performCalculation = () => {
    try{
    const result = eval(currentOutputElement.innerHTML)
    return result
    }
    catch {
        return ("Math Error")
    }
}

const displayResult = () => {
    currentOutputElement.innerHTML = performCalculation()
}

const clearAllOutput = () => {
        currentOutputElement.innerHTML = ''
}

const deleteLastChar = () => {
    if (performCalculation() == 'Math Error') {
        currentOutputElement.innerHTML = ''
    }
    else {
    currentOutputElement.innerHTML = currentOutputElement.innerHTML.slice(0, -1)
    }
}




numberAndOperationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == '.' && currentOutputElement.innerHTML.includes('.')) return;
        appendOperands(button.innerHTML)
    })
})
equalButton.addEventListener('click', displayResult)
clearAllButton.addEventListener('click', clearAllOutput)
deleteButton.addEventListener('click', deleteLastChar)