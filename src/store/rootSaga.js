import { all, call } from 'redux-saga/effects';
import { postsSaga } from './posts/posts.sagas';

export default function* rootSaga() {
	yield all([ call(postsSaga) ]);
}
