import * as actionTypes from './posts.types';
import axios from '../../apis/axios-posts';

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/posts');
    dispatch({
      type: actionTypes.ALL_POSTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err);
  }
};