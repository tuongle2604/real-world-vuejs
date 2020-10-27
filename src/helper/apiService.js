import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "https://conduit.productionready.io/api";
axios.defaults.headers.post["content-type"] = "application/json";

const handleRespone = res => {
  return {
    status: res.status,
    ...res.data
  };
};

const handeError = error => {
  if (error.response && [401, 403, 422].includes(error.response.status)) {
    throw { status: error.response.status, ...error.response.data };
  }

  Vue.notify({
    type: "error",
    position: "top right",
    title: "Error message",
    text: "Something happend, please try again!"
  });

  throw {
    status: 400,
    errors: {
      server: "Some thing happend, please try again"
    }
  };
};

export default {
  setHeader: token => {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  },
  get: (url, data) => {
    return axios
      .get(url, { params: data })
      .then(handleRespone)
      .catch(handeError);
  },
  post: (url, data) => {
    return axios
      .post(url, data || {})
      .then(handleRespone)
      .catch(handeError);
  },
  put: (url, data) => {
    return axios
      .put(url, data)
      .then(handleRespone)
      .catch(handeError);
  },
  delete: (url, data) => {
    return axios
      .delete(url, data)
      .then(handleRespone)
      .catch(handeError);
  }
};
