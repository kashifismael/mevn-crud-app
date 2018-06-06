const Employee = require('../models/Employee')

class EmployeeService {

    updateEmployee(id, employee){
        let query = { _id: id }
        return Employee.findOneAndUpdate(query, employee, {}, employee => {
            return employee
        })
    }
    
    getEmployeebyId(id){
        return Employee.findById(id)
    }
    
    getAllEmployees(){
        return Employee.find()
    }
    
    saveEmployee(employee){
        let newEmployee = new Employee(employee)
        return newEmployee.save()
    }

    deleteEmployee(id){
        return Employee.findByIdAndRemove(id, employee => {
            return employee
        })
    }

}

const employeeService = new EmployeeService()

module.exports = employeeService