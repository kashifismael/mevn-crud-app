import { httpClient } from './HttpClient'

class EmployeeService {

    constructor(){
        //this._http = new HttpClient();
        this._http = httpClient;
        this.apiUrl = "http://localhost:8000/employees";
    }
    
    getAllEmployees() {
        return this._http.get(this.apiUrl);
    }

    getOneEmployeeById(id){
       return this._http.get(`${this.apiUrl}/${id}`);
    }

    createEmployee(employee){
        return this._http.post(this.apiUrl, employee);
    }

    updateEmployee(employee){
        return this._http.put(`${this.apiUrl}/${employee._id}`, employee);
    }

    deleteEmployee(id){
        return this._http.delete(`${this.apiUrl}/${id}`)
    }

}

//export const employeeService = new EmployeeService()
const employeeService = new EmployeeService()
export default employeeService