import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { pick } from "@/helper/utils";

// const iconNames = ["faSignInAlt"];
// const icons = pick(module, iconNames);
// console.log(icons);
// Object.values(icons).forEach(icon => library.add(icon));

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
