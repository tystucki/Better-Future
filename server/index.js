const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

// Include and initialize the rollbar library with access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '41ef6abd440d445b82d3cf2e424247a9',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const {
    getExpenses,
    addExpense,
    deleteExpense,
} = require('./controller')

app.get('/getExpenses', getExpenses)
app.post('/addExpense', addExpense)
app.delete('/deleteExpense/:id', deleteExpense)

//add middleware
//deployment lab
// send index.html and also send client folder

app.listen(5020, () => console.log('Listening on port 5020!'))