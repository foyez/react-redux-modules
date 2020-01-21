import * as actionTypes from './posts.types';

const initialState = {
  postList: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ALL_POSTS:
      return {
        ...state,
        postList: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;