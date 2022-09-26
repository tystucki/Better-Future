
const expenses = require('./db.json')

// Get, Put, Delete, Push

module.exports = {
    getExpenses: (req, res) => {
        res.status(200).send(expenses)
    }
}