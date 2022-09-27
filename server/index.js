const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const {
    getExpenses,
    addExpense,
    deleteExpense,
} = require('./controller')

app.get('/getExpenses', getExpenses)
app.post('/addExpense', addExpense)
app.delete('/deleteExpense/:id', deleteExpense)


app.listen(5020, () => console.log('Listening on port 5020!'))