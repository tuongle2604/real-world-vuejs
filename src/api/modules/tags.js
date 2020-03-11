import END_POINTS from "@/common/endPoints";
import ApiService from "@/common/apiService";

const getTags = () => {
  return ApiService.get(END_POINTS.LIST_TAGS);
};

export { getTags };
