<template >
  <form class="add-user-form">
    <div>
      <label>Name : </label>
      <input
        class="form-control"
        v-model="user.name"
        placeholder="Enter Your name"
      />
    </div>
    <div>
      <label>Age: </label>
      <input
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
          ><input type="radio" value="male" v-model="user.sex" /> Male</label
        >
        <label
          ><input type="radio" value="female" v-model="user.sex" />
          Female</label
        >
      </span>
    </div>
    <div>
      <label>City: </label>
      <select v-model="user.city" class="form-control">
        <option value="pune">Pune</option>
        <option value="latur">Latur</option>
      </select>
    </div>
    <div>
      <button
        style="margin-left: 80px; margin-top: 10px"
        class="btn btn-warning"
        @click.prevent="handleSubmit"
      >
        {{this.user.id?'Update User':'Add User'}}
      </button>
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
      this.$emit("adduser", this.user);
      this.user = { ...userDefaultValue };
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