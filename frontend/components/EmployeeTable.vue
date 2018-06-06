<template>
    <table class="table">
        <thead>
            <th>First name</th>
            <th>Last name</th>
            <th>Salary</th>
            <th>View</th>
            <th>Delete</th>
        </thead>
        <tbody>
            <tr v-for="employee in employees" :key="employee._id">
                <td>{{ employee.firstname }}</td>
                <td>{{ employee.lastname }}</td>
                <td>{{ employee.salary }}</td>
                <td><nuxt-link v-bind:to="'/employees/'+employee._id" >View/Edit</nuxt-link></td>
                <td><button class="btn btn-danger" v-bind:value="employee._id" v-on:click="deleteEmployee">Delete</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
//import {employeeService} from "~/services/EmployeeService.js";
import employeeService from "~/services/EmployeeService.js";

export default {
  data() {
    return {
      employees: []
    };
  },
  mounted: async function() {
    this.employees = await employeeService.getAllEmployees();
    console.log(this.employees);
  },
  methods: {
    deleteEmployee: async function(event) {
      const employeeId = event.target.value;
      console.log(`delete this employee ${employeeId}`);
      const deletedEmployee = await employeeService.deleteEmployee(employeeId);
      this.removeEmployeeFromTable(deletedEmployee._id);
    },
    removeEmployeeFromTable: function(deletedId) {
      for (let i = 0; i < this.employees.length; i++) {
        if (this.employees[i]._id == deletedId) {
          this.employees.splice(i, 1);
        }
      }
    }
  }
};
</script>
