import Vuex from "vuex";
import Vue from "vue";
const baseURL = "https://sunilmore-rest-api.herokuapp.com/api";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    user: {},
    users: [],
    loading: false
  },
  mutations: {
    SETUSER(state, user) {
      state.user = user;
    },
    SETLOADING(state, loading) {
      state.loading = loading;
    },
    SETUSERS(state, users) {
      state.users = users;
    }
  },
  actions: {
    addUser({ dispatch, commit }, user) {
      commit("SETLOADING", true);
      fetch(baseURL + "/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8" // Indicates the content
        }
      }).then((res) => dispatch("getUsers"));
    },
    updateUser({ commit, dispatch, state }, user) {
      commit("SETLOADING", true);
      fetch(baseURL + "/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8" // Indicates the content
        }
      }).then((res) => dispatch("getUsers"));
    },
    removeUser({ commit, state, dispatch }, id) {
      commit("SETLOADING");
      fetch(baseURL + "/users/" + id, { method: "DELETE" }).then((res) =>
        dispatch("getUsers")
      );
    },
    getUsers({ commit, state }) {
      commit("SETLOADING", true);
      console.log("callign users");
      fetch(baseURL + "/users")
        .then((res) => res.json())
        .then((users) => commit("SETUSERS", users))
        .finally((e) => {
          commit("SETLOADING", false);
        });
    }
  }
});
export default store;
