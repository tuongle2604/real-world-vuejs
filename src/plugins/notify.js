import Vue from "vue";
import Notifications from "vue-notification";
Vue.use(Notifications);

export default {
  install(Vue) {
    Vue.prototype.$notifyError = message => {
      Vue.notify({
        group: "notify",
        type: "error",
        position: "top right",
        title: "Error message",
        text: message || "Something happend, please try again!"
      });
    };

    Vue.prototype.$notifySuccess = message => {
      Vue.notify({
        group: "notify",
        type: "success",
        position: "top right",
        title: "Success message",
        text: message
      });
    };
  }
};
