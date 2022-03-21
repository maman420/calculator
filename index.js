let number1 = 2
let number2 = 9
document.getElementById("num1").innerText = number1
document.getElementById("num2").textContent = number2
let sumpm = document.getElementById("sum")

function add() {
    let sum = number1 + number2;
    sumpm.textContent = `sum : ${sum}`
}

function divide() {
    let sum = number1 / number2;
    sumpm.textContent = `sum : ${sum}`
}

function substract() {
    let sum = number1 - number2;
    sumpm.textContent = `sum : ${sum}`
}
function multiply() {
    let sum = number1 * number2;
    sumpm.textContent = `sum : ${sum}`
}