import END_POINTS from "@/helper/endPoints";
import ApiService from "@/helper/apiService";
import { replaceParams } from "@/helper/utils";

const getArticles = params => {
  return ApiService.get(END_POINTS.LIST_ARTICLES, params);
};

const getFeeds = params => {
  return ApiService.get(END_POINTS.FEED_ARTICLES, params);
};

const getArticle = slug => {
  const url = replaceParams(END_POINTS.GET_ARTICLE, slug);
  return ApiService.get(url);
};

const createArticle = data => {
  return ApiService.post(END_POINTS.CREATE_ARITLCE, data);
};

const updateArticle = (slug, data) => {
  const url = replaceParams(END_POINTS.UPDATE_ARITLCE, slug);
  return ApiService.post(url, data);
};

const deleteArticle = slug => {
  const url = replaceParams(END_POINTS.DELETE_ARITLCE, slug);
  return ApiService.delete(url);
};

const favoriteArticle = slug => {
  const url = replaceParams(END_POINTS.FAVORITE_ARTICLE, slug);
  return ApiService.post(url);
};

const unfavoriteArticle = slug => {
  const url = replaceParams(END_POINTS.UNFAVORITE_ARTICLE, slug);
  return ApiService.delete(url);
};

const getComments = slug => {
  const url = replaceParams(END_POINTS.LIST_COMMENTS, slug);
  return ApiService.get(url);
};

const addComment = (slug, data) => {
  const url = replaceParams(END_POINTS.LIST_COMMENTS, slug);
  return ApiService.post(url, data);
};

const deleteComment = (slug, commentId) => {
  const url = replaceParams(END_POINTS.DELETE_COMMENTS, slug, commentId);
  return ApiService.delete(url);
};

export {
  getArticles,
  getFeeds,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
  favoriteArticle,
  unfavoriteArticle,
  getComments,
  addComment,
  deleteComment
};
