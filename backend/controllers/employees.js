const express = require('express')
const router = express.Router()

const _employeeService = require('../services/EmployeeService')

router.get('/', async (req, res) => {
    const employees = await _employeeService.getAllEmployees()
    res.json(employees)
})

router.get('/:id', async (req, res) => {
    const employee = await _employeeService.getEmployeebyId(req.params.id)
    res.json(employee)
})

router.put('/:id', async (req, res) => {
    let updatedEmployee = await _employeeService.updateEmployee(req.params.id, {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        salary: req.body.salary
    })
    res.json(updatedEmployee)
})

router.delete('/:id', async (req, res) => {
    try {
        _employeeService.deleteEmployee(req.params.id)
        res.json({ _id: req.params.id })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    const result = await _employeeService.saveEmployee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        salary: req.body.salary
    })
    res.json(result)
})

module.exports = router