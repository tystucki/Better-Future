const baseURL = 'http://localhost:5020'
const addButton = document.querySelector('#addExpense')

const showExpenses = document.querySelector('#expenseDisplay')

// Axio request to get the expense array
// Loop over that array
// Create expense cards for each item in the array

const getAllExpenses = () => {
    axios.get(`${baseURL}/getExpenses`)
        .then((res) => {
            displayExpenses(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

const displayExpenses = (arr) => {
    let totalSpending = 0;
    for(let i = 0; i < arr.length; i++){
        createExpenseCard(arr[i])
       let splitCost = arr[i].cost.split('$')
       totalSpending += Number(splitCost[1])
       
    }
    document.querySelector('#totalS').textContent = totalSpending
}

const createExpenseCard = (expense) => {
    const expenseCard = document.createElement('section')
    expenseCard.classList.add('expense-card')

    expenseCard.innerHTML = `
    <br></br>
        <p>${expense.name}</p>
        <p class='spending'>${expense.cost}</p>
        <p>${expense.date}</p>
        <p>${expense.description}</p>
        <button onclick="deleteExpense(${expense.id})"> Delete </button>
    `
    showExpenses.appendChild(expenseCard)
}

const deleteExpense = (id) => {
    axios.delete(`${baseURL}/deleteExpense/${id}`)
        .then((res) => {
            showExpenses.innerHTML = ''
            displayExpenses(res.data)
        })
}

const addExpense = () => {
    let nameInput = document.querySelector('#nameInput')
    let costInput = document.querySelector('#costInput')
    let dateInput = document.querySelector('#dateInput')
    let descriptionInput = document.querySelector('#descriptionInput')

let newExpense = {
    name: nameInput.value,
    cost: costInput.value,
    date: dateInput.value,
    description: descriptionInput.value
}
axios.post(`${baseURL}/addExpense`, newExpense)
.then((res) => {
    showExpenses.innerHTML = ''

    nameInput.value = ''
    costInput.value = ''
    dateInput.value = ''
    descriptionInput.value = ''

    displayExpenses(res.data)
})

}
addButton.addEventListener('click', addExpense)
getAllExpenses()

