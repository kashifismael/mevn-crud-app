<template>
  <div>
    <Navbar />
    <h1 class="text-center">All Employees</h1>
    <div class="container">
      <EmployeeTable />
    </div>
  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue';
import EmployeeTable from '~/components/EmployeeTable.vue';

export default {
  components: {
    Navbar,
    EmployeeTable
  }

}
</script>

<style>

</style>
