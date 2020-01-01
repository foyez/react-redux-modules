import { ALL_POSTS } from './actionTypes';
import axios from '../../apis/axios-posts';

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/posts');
    dispatch({
      type: ALL_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
};