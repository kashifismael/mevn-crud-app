<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 class="text-center">Create Employee</h1>
      <h2 v-if="addedSuccessfully" class="text-center" id="successMessage">{{ message }}</h2>

      <form>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">First name</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="employee.firstname">
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Last name</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="employee.lastname">
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Salary</span>
          </div>
          <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="employee.salary">
        </div>

        <button class="btn btn-success" v-on:click="submitEmployee">Create Employee</button>

      </form>

    </div>
  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue';
import employeeService from "~/services/EmployeeService.js";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      addedSuccessfully: false,
      message: "Employee Added Successfully",
      employee: {
        firstname: '',
        lastname: '',
        salary: 15000
      }
    }
  },
  methods: {
    submitEmployee: async function(event){
      event.preventDefault();
      //console.log(this.employee)
      const newEmployee = await employeeService.createEmployee(this.employee)
      console.log(newEmployee)
      if(newEmployee)
        this.addedSuccessfully = true
    }
  }
  
}
</script>

<style scoped>

#successMessage {
  color: green;
}

</style>
