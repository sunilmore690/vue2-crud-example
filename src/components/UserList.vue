<template>
  <div>
    <legend>User List</legend>

    <table class="table">
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody style="text-align: center">
        <tr v-for="(user, index) in users" :key="'user-row-' + index">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td v-text="user.age"></td>
          <td v-text="user.sex"></td>
          <td v-text="user.city"></td>
          <td>
            <button @click="handleEdit(user)" class="btn btn-sm btn-warning">
              Edit</button
            >&nbsp;
            <button @click="removeUser(index)" class="btn btn-sm btn-danger">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["users"],
  methods: {
    handleEdit(user) {
      this.$emit("edituser", user);
    },
    removeUser(index) {
      this.$emit("removeuser", index);
    },
  },
};
</script>