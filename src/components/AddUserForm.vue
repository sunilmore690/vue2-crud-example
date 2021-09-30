<template >
  <form class="add-user-form">
    <div>
      <label>Name : </label>
      <input
        v-focus
        class="form-control"
        v-model="user.name"
        placeholder="Enter your full name"
      />
    </div>
    <div>
      <label>Age: </label>
      <input
        v-leftborder
        class="form-control"
        type="number"
        v-model.number="user.age"
        min="19"
        max="65"
      />
    </div>
    <div>
      <label>Sex :</label>
      <span
        ><label style="margin-right: 20px"
          ><input type="radio" value="Male" v-model="user.sex" /> Male</label
        >
        <label
          ><input type="radio" value="Female" v-model="user.sex" />
          Female</label
        >
      </span>
    </div>
    <div>
      <label>City: </label>
      <select v-model="user.city" class="form-control">
        <option>Pune</option>
        <option>Latur</option>
      </select>
    </div>
    <div>
      <button
        style="margin-left: 80px; margin-top: 10px"
        class="btn btn-sm btn-warning"
        @click.prevent="handleSubmit"
      >
        {{ this.user.id ? "Update User" : "Add User" }}
      </button>
      <button
        style="margin-left: 80px; margin-top: 10px"
        class="btn btn-sm btn-default"
        @click.prevent="handleClear"
      >
        Clear
      </button>
      <span v-if="loading" style="margin-top: 10px">Loading....</span>
    </div>
  </form>
</template>
<script>
const userDefaultValue = {
  name: "",
  age: 0,
  sex: "",
  city: "",
};
export default {
  props: ["userdata"],
  data() {
    return {
      user: this.userdata || {},
    };
  },
  methods: {
    handleSubmit() {
      if (this.user.id) {
        this.$store.dispatch("updateUser", this.user);
      } else {
        this.$store.dispatch("addUser", this.user);
      }
      this.user = { ...userDefaultValue };
    },
    handleClear() {
      this.user = { ...userDefaultValue };
    },
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
  watch: {
    userdata() {
      this.user = { ...this.userdata };
    },
  },
};
</script>
<style scoped>
</style>