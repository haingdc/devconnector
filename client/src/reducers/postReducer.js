import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  POST_LOADING,
  DELETE_POST
} from '../actions/type';

const initialState = {
  posts: [],
  post: {},
  loading: false,
};

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      const newPost = action.payload,
            otherPosts = state.posts;
      return {
        ...state,
        posts: [newPost, ...otherPosts],
      };
    case POST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };
    default:
      return state;
  }
}