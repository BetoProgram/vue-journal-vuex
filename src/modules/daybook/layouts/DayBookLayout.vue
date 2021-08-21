<template>
  <navbar />
  <div class="d-flex">
    <div class="col-4">
      <enter-list />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import EnterList from "../components/EnterList";

export default {
  name: "DayBookLayout",
  components: {
    EnterList,
    Navbar
  }
}
</script>

<style scoped>

</style>