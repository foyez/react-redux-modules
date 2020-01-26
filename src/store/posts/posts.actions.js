import actionTypes from './posts.types';
import axios from '../../apis/axios-posts';

export const fetchPostsStart = () => ({
  type: actionTypes.FETCH_POSTS_START,
});

export const fetchPostsSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = errorMessage => ({
  type: actionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
});

export const fetchPostsAsync = () => async dispatch => {
  dispatch(fetchPostsStart());

  try {
    const res = await axios.get('/posts');
    dispatch(fetchPostsSuccess(res.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};