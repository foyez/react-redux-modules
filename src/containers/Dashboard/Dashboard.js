import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const Dashboard = props => {
  useEffect(() => {
    props.getAllPosts();
  }, []);

  let posts = (
    <div>Loading...</div>
  );

  if (props.postList) {
    posts = props.postList.slice(0, 10).map(post => <div key={ post.id }>{ post.id + '. ' + post.title }</div>);
  }

  return posts;
}

const mapStateToProps = state => ({
  postList: state.posts.postList,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(actions.getAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);