<template>
    <div>
        <Navbar />
        <div class="container">
            <h1 class="text-center">View/Edit employee {{ $route.params.id }}</h1>
              <h2 v-if="updatedSuccessfully" class="text-center" id="successMessage">{{ message }}</h2>

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

                <button class="btn btn-success" v-on:click="updateEmployee">Update Employee</button>

            </form>

        </div>
    </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import employeeService from "~/services/EmployeeService.js";

export default {
  components: {
    Navbar
  },
  data() {
    return {
      updatedSuccessfully: false,
      message: "Employee Updated Successfully",
      employee: {
        _id: this.$route.params.id,
        firstname: "",
        lastname: "",
        salary: 0
      }
    };
  },
  mounted: async function() {
    this.employee = await employeeService.getOneEmployeeById(
      this.$route.params.id
    );
    //console.log(this.employee);
  },
  methods: {
      updateEmployee: async function(event){
          event.preventDefault()
          console.log(this.employee)
          const updatedEmployee = await employeeService.updateEmployee(this.employee)
          console.log(updatedEmployee)
          if(updatedEmployee)
            this.updatedSuccessfully = true
      }
  }
};
</script>

<style scoped>
#successMessage {
    color: green;
}
</style>
