import axios from "axios";
const GET_JSON_POSTS_REQUEST = "GET_JSON_POSTS_REQUEST";
const GET_JSON_POSTS_SUCCESS = "GET_JSON_POSTS_SUCCESS";
const GET_JSON_POSTS_FAILED = "GET_JSON_POSTS_FAILED";

export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const posts = res.data;
        dispatch(getPostsSuccess(posts));
      })
      .catch((err) => {
        dispatch(getPostsFailed(err));
      });
  };
};

export const getPostsRequest = () => {
  return {
    type: GET_JSON_POSTS_REQUEST,
  };
};

export const getPostsSuccess = (posts) => {
  return {
    type: GET_JSON_POSTS_SUCCESS,
    payload: posts,
  };
};

export const getPostsFailed = (error) => {
  return {
    type: GET_JSON_POSTS_FAILED,
    payload: error,
  };
};

export const GET_JSON_POSTS_TYPE = {
  request: GET_JSON_POSTS_REQUEST,
  success: GET_JSON_POSTS_SUCCESS,
  failed: GET_JSON_POSTS_FAILED,
};
