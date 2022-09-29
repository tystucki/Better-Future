
// const baseURL = 'http://localhost:5020'

// const form = document.querySelector('form')

// function investmentCalc(e){
//     e.preventDefault()

const investmentCalc = () => {
let startingInput = document.querySelector('#startingInput')
let contributionInput = document.querySelector('#contributionInput')
let currentInput = document.querySelector('#currentInput')
let retirementInput = document.querySelector('#retirementInput')
let returnInput = document.querySelector('#returnInput')

let newCalc = {
    starting: startingInput.value,
    contribution: contributionInput.value,
    current: currentInput.value,
    retirement: retirementInput.value,
    return: retirementInput.value
}
.then((res) => {
    let years = (retirementInput - currentInput)
})
console.log(years)

}
