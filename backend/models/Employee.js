const mongoose = require('./db')
//const Schema = mongoose.Schema

// const employeeSchema = mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     salary: Number
// })

const Employee = mongoose.model('Employee', {
    firstname: String,
    lastname: String,
    salary: Number
})

module.exports = Employee