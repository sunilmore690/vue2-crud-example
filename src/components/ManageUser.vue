<template>
  <div>
    <AddUserForm :userdata.sync="user" @adduser="handleAddUser" />
    <UserList @edituser="handleEdit" @removeuser="removeUser" :users="users" />
  </div>
</template>
<script>
const userDefaultValue = {
  name: "",
  age: 0,
  sex: "",
  city: "",
};
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";
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
  computed: {},
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