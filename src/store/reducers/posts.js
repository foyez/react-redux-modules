import { ALL_POSTS } from '../actions/actionTypes';

const initialState = {
  postList: null,
};

const postsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_POSTS:
      return {
        ...state,
        postList: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;