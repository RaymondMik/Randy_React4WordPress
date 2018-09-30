import { call, put, takeEvery } from 'redux-saga/effects';
import { getData, postData } from '../data/callsHandler';
import * as actions from '../actions';

function* getPostsData() {
    try {
        yield put(actions.receivePosts());
        const posts = yield call(getData, 'posts?_embed');
        yield put(actions.receivePostsSuccess(posts));
    } catch(err) {
        yield put(actions.receivePostsFailure(err));
    }
}

function* getPages() {
    try {
        yield put(actions.receivePages())
        const pages = yield call(getData, 'pages?_embed');
        yield put(actions.receivePagesSuccess(pages))
    } catch(err) {
        yield put(actions.receivePagesFailure(err));
    }
}

function* getComments() {
    try {
        yield put(actions.receiveComments());
        const comments = yield call(getData, 'comments');
        yield put(actions.receiveCommentsSuccess(comments));
    } catch(err) {
        yield put(actions.receiveCommentsFailure(err));
    }
}

function* sendComment({postId, name, email, content}) {
    try {
        const comment = yield call(postData, 'comments', postId, name, email, content);
        yield put(actions.postCommentSuccess(comment));
        yield getComments();
    } catch(err) {
        yield put(actions.postCommentFailure(err));
    }   
}

function* watchSendComment() {
    yield takeEvery(actions.POST_COMMENT, sendComment);
}

function* getApod() {
    try {
        yield put(actions.receiveAPOD());
        const url = 'https://api.nasa.gov/planetary/apod?api_key=VJiG1ipRGYSR2cYznlM0uIYtcLCF1SJT9TsYIYKx';
        const apod = yield call(getData, false, url);
        yield put(actions.receiveAPODSuccess(apod));
    } catch(err) {
        yield put(actions.receiveAPODFailure(err));
    }
}

function* rootSaga() {
    yield getPostsData();
    yield getPages();
    yield getComments();
    yield getApod();
    yield watchSendComment();
}

export default rootSaga;