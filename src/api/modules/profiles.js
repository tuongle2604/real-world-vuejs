import END_POINTS from "@/helper/endPoints";
import ApiService from "@/helper/apiService";
import { replaceParams } from "@/helper/utils";

const getProfile = username => {
  const url = replaceParams(END_POINTS.GET_PROFILE, username);
  return ApiService.get(url);
};

const followUser = username => {
  const url = replaceParams(END_POINTS.FOLLOW_USER, username);
  return ApiService.post(url);
};

const unfollowUser = username => {
  const url = replaceParams(END_POINTS.UNFOLLOW_USER, username);
  return ApiService.delete(url);
};

export { getProfile, followUser, unfollowUser };
