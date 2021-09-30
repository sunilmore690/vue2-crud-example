<template>
  <div>
    <legend>User List</legend>

    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>
            Name
            <i
              v-if="sortField === 'name'"
              :class="['fa', sort == 'desc' ? 'fa-sort-desc' : 'fa-sort-asc']"
              @click="doSort('name')"
            ></i>
          </th>
          <th>
            Age
            <i
              v-if="sortField === 'age'"
              :class="['fa', sort == 'desc' ? 'fa-sort-desc' : 'fa-sort-asc']"
              @click="doSort('age')"
            ></i>
          </th>
          <th>
            Sex
            <i
              v-if="sortField === 'sex'"
              :class="['fa', sort == 'desc' ? 'fa-sort-desc' : 'fa-sort-asc']"
              @click="doSort('sex')"
            ></i>
          </th>
          <th>
            City
            <i
              v-if="sortField === 'city'"
              :class="['fa', sort == 'desc' ? 'fa-sort-desc' : 'fa-sort-asc']"
              @click="doSort('city')"
            ></i>
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody style="text-align: center">
        <tr>
          <td></td>
          <td v-for="key in keys" :key="key + 'search'">
            <input type="text" v-model="filter[key]" />
          </td>
        </tr>
        <tr v-for="(user, index) in filteredUsers" :key="'user-row-' + index">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td v-text="user.age"></td>
          <td v-text="user.sex"></td>
          <td v-text="user.city"></td>
          <td>
            <button @click="handleEdit(user)" class="btn btn-sm btn-warning">
              Edit</button
            >&nbsp;
            <button @click="removeUser(user.id)" class="btn btn-sm btn-danger">
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
  //  props: ["users"],
  data() {
    return {
      sort: "asc",
      sortField: 'name',
      filter: {},
      keys: ["name", "age", "sex", "city"],
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    filteredUsers() {
      const isEmpty = Object.values(this.filter).every(
        (x) => x === null || x === ""
      );
      if (isEmpty) {
        return this.users;
      }
      console.log(this.filter, typeof this.filter);

      // let keys = Object.keys({ ...this.filter });
      let users = this.users;
      return users.filter((user) => {
        let filterRecord = true;
        for (let index in this.keys) {
          let key = this.keys[index];
          if (
            this.filter[key] &&
            !user[key].match(new RegExp(this.filter[key], "i"))
          ) {
            filterRecord = false;
            break;
          }
        }

        return filterRecord;
      });
    },
  },
  methods: {
    handleEdit(user) {
      this.$emit("edituser", user);
    },
    removeUser(id) {
      this.$store.dispatch("removeUser", id);
    },
    doSort(sortField) {
      this.sortField = sortField;
      this.sort = this.sort === 'asc'?'desc':'asc';
      if(this.sort === 'asc'){
        this.filteredUsers.sort((a, b) =>
        a[sortField].localeCompare(b[sortField])
      );
      }else{
        this.filteredUsers.sort((a, b) =>
        b[sortField].localeCompare(a[sortField])
      );
      }
      
    },
  },
};
</script>