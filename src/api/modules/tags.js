import END_POINTS from "@/helper/endPoints";
import ApiService from "@/helper/apiService";

const getTags = () => {
  return ApiService.get(END_POINTS.LIST_TAGS);
};

export { getTags };
