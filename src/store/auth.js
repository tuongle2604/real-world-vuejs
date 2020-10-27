import ApiService from "@/helper/apiService";
import TokenService from "@/helper/tokenService";
import { login, register, checkAuth } from "@/api";

const state = {
  user: {}
};
const getters = {
  isAuth: state => !!state.user.token
};
const mutations = {
  setUserInfo(state, user) {
    state.user = user;
  }
};
const actions = {
  login: ({ commit }, data) => {
    return login(data).then(res => {
      ApiService.setHeader(res.user.token);
      TokenService.setToken(res.user.token);
      commit("setUserInfo", res.user);
    });
  },
  register: ({ commit }, data) => {
    return register(data).then(res => {
      ApiService.setHeader(res.user.token);
      TokenService.setToken(res.user.token);
      commit("setUserInfo", res.user);
    });
  },
  checkAuth: ({ commit }) => {
    const token = TokenService.getToken();
    ApiService.setHeader(token);

    return checkAuth().then(res => {
      commit("setUserInfo", res.user);
    });
  },
  logout: ({ commit }) => {
    commit("setUserInfo", {});
    TokenService.removeToken();
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {}
};
