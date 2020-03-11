import END_POINTS from "@/common/endPoints";
import ApiService from "@/common/apiService";

const login = data => {
  return ApiService.post(END_POINTS.LOGIN, data);
};

const register = params => {
  return ApiService.post(END_POINTS.REGISTER, params);
};

const checkAuth = () => {
  return ApiService.get(END_POINTS.CHECK_AUTH);
};

const getUser = data => {
  return ApiService.get(END_POINTS.GET_USER, data);
};

const updateUser = data => {
  return ApiService.put(END_POINTS.UPDATE_USER, data);
};

export { login, register, checkAuth, getUser, updateUser };
