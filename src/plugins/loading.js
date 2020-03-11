import Loading from "@/components/Loading";
import Vue from "vue";

// https://github.com/noxludio/vuejs-loading-plugin
// Adding component loading

function loadingComponent() {
  if (!this.$refs.loading) return;

  let vm = new Vue(Loading).$mount();
  vm.isFullScreent = false;

  this.$refs.loading.appendChild(vm.$el);
  this.$refs.loading.style.position = "relative";

  const show = () => (vm.loading = true);
  const hide = () => {
    this.$refs.loading.removeChild(vm.$el);
    vm.$destroy();
    vm = null;
  };

  return { show, hide };
}

export default {
  install(Vue) {
    const vm = new Vue(Loading).$mount();
    document.body.appendChild(vm.$el);

    const loading = loadingComponent;
    loading.show = () => (vm.loading = true);
    loading.hide = () => (vm.loading = false);

    Vue.prototype.$loading = loading;
  }
};
