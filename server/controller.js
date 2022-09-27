
const expenses = require('./db.json')
let expenseId = 4
// Get, Put, Delete, Push

module.exports = {
    getExpenses: (req, res) => {
        res.status(200).send(expenses)
    },

    addExpense: (req, res) => {

        const {name, cost, date, description} = req.body
        console.log(req.body)
        let newExpenseObject = {
            id: expenseId,
            name: name,
            cost: cost,
            date: date,
            description: description
        }

        expenses.push(newExpenseObject)

        expenseId++

        res.status(200).send(expenses)
    },

    deleteExpense: (req, res) => {
        const index = expenses.findIndex(el => el.id === +req.params.id)
        
        expenses.splice(index, 1)

        res.status(200).send(expenses)
    }
}