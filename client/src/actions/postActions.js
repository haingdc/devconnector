import axios from 'axios';

import {
  ADD_POST,
  GET_POST,
  GET_POSTS,
  GET_ERRORS,
  DELETE_POST,
  POST_LOADING,
  CLEAR_ERRORS
} from './type';

// Add Post
export const addPost = postData => dispatch => {
  dispatch(clearErrors());
  axios.post('/api/posts', postData)
    .then(res => 
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios.get('/api/posts')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    ).catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: undefined,
      })
    )
}

// Get Posts
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios.get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    ).catch(err =>
      dispatch({
        type: GET_POST,
        payload: undefined,
      })
    )
}

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
}

// Delete post
export const deletePost = id => dispatch => {
  axios.delete(`/api/posts/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}

// Add like
export const addLike = id => dispatch => {
  axios.post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}

// Remove like
export const removeLike = id => dispatch => {
  axios.post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
     );
}

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios.post(`/api/posts/comment/${postId}`, commentData)
    .then(res => 
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}

// Delete Comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios.delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    ).catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
}

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})