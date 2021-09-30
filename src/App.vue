<template>
  <div class="container" id="app">
    <ManageUser />
  </div>
</template>

<script>
import ManageUser from "./components/ManageUser";

export default {
  name: "App",
  components: {
    ManageUser,
  },
  async mounted() {
    await this.$store.dispatch("getUsers");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
