import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPostList } from '../../store/posts/posts.selectors';
import { fetchPostsAsync } from '../../store/posts/posts.actions';

const Dashboard = ({ postList, fetchPostsAsync }) => {
	useEffect(
		() => {
			fetchPostsAsync();
		},
		[ fetchPostsAsync ]
	);

	let posts = <div>Loading...</div>;

	if (postList) {
		posts = postList.slice(0, 10).map((post) => <div key={post.id}>{post.id + '. ' + post.title}</div>);
	}

	return posts;
};

const mapStateToProps = createStructuredSelector({
	postList: selectPostList
});

const mapDispatchToProps = (dispatch) => ({
	fetchPostsAsync: () => dispatch(fetchPostsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
