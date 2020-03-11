import Vue from "vue";

Vue.directive("trim-on-blur", {
  inserted: function(el) {
    const inputType = el.getAttribute("type");
    if (inputType === "password") return;

    el.onblur = () => {
      el.value = el.value.trim();
      el.dispatchEvent(new Event("input"));
    };
  }
});
