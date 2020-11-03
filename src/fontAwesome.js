import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faHeart,
  faEdit,
  faTrash,
  faCog,
  faPlus,
  faUser,
  faUserEdit,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars);
library.add(faHeart);
library.add(faEdit);
library.add(faTrash);
library.add(faCog);
library.add(faPlus);
library.add(faUser);
library.add(faUserEdit);
library.add(faPencilAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
