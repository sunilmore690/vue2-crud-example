<template>
  <div class="">
    <div class="row">
      <AddUserForm
        class="col-sm-6 col-offset-3"
        :userdata.sync="user"
        @adduser="handleAddUser"
      />
    </div>

    <UserList @edituser="handleEdit" @removeuser="removeUser" :users="users" />
  </div>
</template>
<script>
import AddUserForm from "./AddUserForm.vue";
import UserList from "./UserList.vue";
const userDefaultValue = {
  name: "",
  age: 0,
  sex: "",
  city: "",
};

export default {
  data() {
    return {
      user: { ...userDefaultValue },
      users: [],
    };
  },
  created() {
    console.log("Login component created", this.user);
  },
  mounted() {
    console.log("Login component mounted");
  },
  updated() {
    // console.log("Login component updated", this.user);
  },

  methods: {
    handleAddUser(user) {
      if (user.id) {
        let index = this.users.findIndex((u) => user.id === u.id);
        this.$set(this.users, index, user);
      } else {
        this.users.push({ ...user, id: this.users.length + 1 });
      }
    },
    handleEdit(user) {
      console.log("handledit", user);
      this.user = user;
    },
    removeUser(index) {
      console.log("removeuser", index);
      this.users.splice(index, 1);
    },
  },
  components: {
    AddUserForm,
    UserList,
  },
};
</script>
<style >
.add-user-form > div {
  display: flex;
  margin: 5px;
  text-align: left;
}
table tbody td {
  text-align: left;
}
.add-user-form > div > label {
  width: 90px;
  margin-right: 10px;
}
</style>