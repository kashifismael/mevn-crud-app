const Express = require('express')
const app = Express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const employees = require('./controllers/employees')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use('/employees', employees)
//app.use('/', employees)

app.get('*', (req, res) => {
    res.send("Page not found");
});

const port = 8000
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})