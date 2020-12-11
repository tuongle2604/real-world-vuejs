import Vue from "vue";
import VueLoading from "./plugins/loading";
import VueNotify from "./plugins/notify";

import "./directives";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./fontAwesome";

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(VueLoading);
Vue.use(VueNotify);
Vue.use(require("vue-moment"));

Vue.config.productionTip = false;
const requireComponent = require.context(
  // The relative path of the components folder
  "./components/BaseComponent",
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /^.+\.vue$/
);
console.log("test webhook");
// register all common component
requireComponent.keys().forEach(dir => {
  if (!dir.includes("Base")) return;

  const component = requireComponent(dir);
  const componentName = dir.replace("./", "").replace("/index.vue", "");

  Vue.component(componentName, component.default || component);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
