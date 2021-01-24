import { GET_JSON_POSTS_TYPE } from "./postsActions";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JSON_POSTS_TYPE.request:
      return {
        ...state,
        loading: true,
      };
    case GET_JSON_POSTS_TYPE.success:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };

    case GET_JSON_POSTS_TYPE.failed:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
