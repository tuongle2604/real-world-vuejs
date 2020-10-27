// const DEV_END_POINTS = {
//   LOGIN: "/data/test.json"
// };

const PROD_END_POINTS = {
  LOGIN: "/users/login",
  REGISTER: "/users",
  CHECK_AUTH: "/user",
  GET_USER: "/user",
  UPDATE_USER: "/user",
  GET_PROFILE: "/profiles/:username",
  FOLLOW_USER: "/profiles/:username/follow",
  UNFOLLOW_USER: "/profiles/:username/follow",
  LIST_ARTICLES: "/articles",
  FEED_ARTICLES: "/articles/feed",
  GET_ARTICLE: "/articles/:slug",
  CREATE_ARITLCE: "/articles",
  UPDATE_ARITLCE: "/articles/:slug",
  DELETE_ARITLCE: "/articles/:slug",
  LIST_COMMENTS: "/articles/:slug/comments",
  DELETE_COMMENTS: "/articles/:slug/comments/:id",
  FAVORITE_ARTICLE: "/articles/:slug/favorite",
  UNFAVORITE_ARTICLE: "/articles/:slug/favorite",
  LIST_TAGS: "/tags"
};

// const END_POINTS = process.env.NODE_ENV === "development" ? DEV_END_POINTS : PROD_END_POINTS;
export default PROD_END_POINTS;
