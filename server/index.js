const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const {
    getExpenses
} = require('./controller')

app.get('/getExpenses', getExpenses)



app.listen(5020, () => console.log('Listening on port 5020!'))