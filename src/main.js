import Vue from "vue";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus();
  }
});
Vue.directive("leftborder", {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.style.borderLeft = "2px solid red";
  }
});
new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
