const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/employeedb')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log("Connected to MongoDB database")
})

module.exports = mongoose